import { Component, Input, OnInit } from '@angular/core';
import { CommentOUT } from 'src/app/interfaces/comment';
import { CommentService } from '../../../services/comment.service';
import { UserOUT } from '../../../interfaces/user';
import { UserService } from '../../../services/user.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {
  @Input() page!: string;
  @Input() pageId!: number;
  comments!: CommentOUT[];
  userLoggedInfo!: UserOUT;
  canShowDeleteCommentBtn = false;
  loading!: boolean;

  constructor(
    private commentService: CommentService,
    private userService: UserService,
    private authService: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.getComments(this.page, this.pageId);
  }

  getComments(type: string, typeId: number): void {
    this.loading = true;
    this.commentService.getComments(type, typeId).subscribe(
      (comments) => {
        this.comments = comments;
        comments.forEach(comment => {
          this.showDeleteCommentBtn(comment);
        });
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      });
  }

  showDeleteCommentBtn(comment: CommentOUT): void {
    // Si l'utilisateur est connecté
    const username: string = this.authService.userLoggedUsername();
    if (username) {
      this.userService.getUserByUsername(username).subscribe(
        userLoggedInfo => {
          // Si c'est un hôtelier
          if (userLoggedInfo.rooms && userLoggedInfo.rooms.length > 0) {
            // Si la chambre (page courante) est la chambre gérée par l'hôtelier ; si le commentaire
            // se trouve dans une page géré par l'hôtelier connecté
            if (userLoggedInfo.rooms.find(room => room.id == comment.roomId)) {
              // On affiche le bouton
              comment.canBeDeleted = true;
            }
          }
          // Si c'est un restaurateur
          else if (userLoggedInfo.restaurants && userLoggedInfo.restaurants.length > 0) {
            // Si le restaurant (page courante) est le restaurant géré par le restaurateur ; si le commentaire
            // se trouve dans une page géré par le restaurateur connecté
            if (userLoggedInfo.restaurants.find(restaurant => restaurant.id == comment.restaurantId)) {
              // On affiche le bouton
              comment.canBeDeleted = true;
            }
          }
          // Si le commentaire a été écrit par un utilisateur connecté et que c'est un utilisateur lembda
          else if (comment.userId && comment.userId == userLoggedInfo.id) {
            comment.canBeDeleted = true;
          }
        },
        error => {
          console.log(error);
        });
    }
    else {
      comment.canBeDeleted = false;
    }
  }

  deleteComment(commentId: number): void {
    this.commentService.delete(commentId).subscribe(
      () => {
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
        this.loading = false;
      });
  }

}
