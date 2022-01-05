import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCommentsComponent } from './comment/list-comments/list-comments.component';
import { CommentComponent } from './comment/comment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailComponent } from './detail/detail.component';
import { FilterComponent } from './filter/filter.component';
import { FavoriteComponent } from './favorite/favorite.component';

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
    FavoriteComponent
  ],
  imports: [
    CommonModule
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
    FavoriteComponent
  ]
})
export class ComponentsModule { }
