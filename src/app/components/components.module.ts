import { RouterModule } from '@angular/router';
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
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule,
    
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
