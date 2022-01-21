import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() page!: string;
  pageId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pageId = +this.route.snapshot.url[1].path;
  }

}
