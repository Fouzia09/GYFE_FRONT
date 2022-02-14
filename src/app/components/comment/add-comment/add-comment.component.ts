import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from '../../../services/comment.service';
import { ListCommentsComponent } from '../list-comments/list-comments.component';
import { CommentIN } from '../../../interfaces/comment';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() page!: string;
  @Input() pageId!: number;
  form!: FormGroup;
  pseudo!: string;
  userLoggedInfo!: any;

  constructor(
    private router: Router,
    private commentService: CommentService,
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.pseudo = this.authService.userLoggedUsername();
    if (!this.pseudo) this.pseudo = 'user_' + (Math.random() + 1).toString(36).substring(7);
    else this.getUserLoggedInfo(this.pseudo);

    this.initAddCommentForm(this.pseudo);
  }

  initAddCommentForm(pseudo: string): void {
    this.form = this.fb.group({
      pseudo: [pseudo, Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      const newComment: CommentIN = {
        author: form.value.pseudo,
        content: form.value.content
      }

      if (this.userLoggedInfo) newComment.user = `api/users/${this.userLoggedInfo.id.toString()}`;
      if (this.page === 'restaurant') newComment.restaurant = `api/restaurants/${this.pageId.toString()}`;
      else if (this.page === 'room') newComment.room = `api/rooms/${this.pageId.toString()}`;
      console.log(newComment);

      this.commentService.addComment(newComment).subscribe(
        () => {
          this.reload(`/room/detail/${this.pageId}`);
        },
        (error) => {
          console.log(error);
        });
    }
  }

  getUserLoggedInfo(username: string): void {
    this.userService.getUserByUsername(username).subscribe(
      userLoggedInfo => {
        this.userLoggedInfo = userLoggedInfo;
      },
      error => {
        console.log(error);
      });
  }

  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  }
}
