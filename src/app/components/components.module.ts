import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListCommentsComponent } from './comment/list-comments/list-comments.component';
import { CommentComponent } from './comment/comment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailComponent } from './detail/detail.component';
import { FilterComponent } from './filter/filter.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSelectModule } from '@angular/material/select';
import { AddFavoriteComponent } from './favorite/add-favorite/add-favorite.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    CarouselComponent,
    DetailComponent,
    FilterComponent,
    CommentComponent,
    ListCommentsComponent,
    FavoriteComponent,
    AddCommentComponent,
    AddFavoriteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatSelectModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    CarouselComponent,
    DetailComponent,
    FilterComponent,
    CommentComponent,
    ListCommentsComponent,
    FavoriteComponent,
    AddCommentComponent,
  ]
})
export class ComponentsModule { }
