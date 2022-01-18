import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { DetailRestaurantComponent } from './detail-restaurant/detail-restaurant.component';


@NgModule({
  declarations: [
    ListRestaurantComponent,
    DetailRestaurantComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    ComponentsModule
  ]
})
export class RestaurantModule { }
