import { SearchPipe } from './list-restaurant/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { DetailRestaurantComponent } from './detail-restaurant/detail-restaurant.component';


@NgModule({
  declarations: [
    ListRestaurantComponent,
    DetailRestaurantComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RestaurantModule { }
