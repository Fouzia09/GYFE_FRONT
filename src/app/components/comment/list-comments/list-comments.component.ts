import { Component, Input, OnInit } from '@angular/core';
import { CommentOUT } from 'src/app/interfaces/comment';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {
  @Input() page!: string;
  @Input() pageId!: number;
  comments!: CommentOUT[];
  loading!: boolean;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.getComments(this.page, this.pageId);
  }

  getComments(type: string, typeId: number): void {
    this.loading = true;
    this.commentService.getComments(type, typeId).subscribe(
      (comments) => {
        this.comments = comments;
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

}
