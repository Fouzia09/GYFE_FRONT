import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDeleteComponent } from './dialog/admin-delete/admin-delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminEditComponent } from './dialog/admin-edit/admin-edit.component';
import { AdminRoomEditComponent } from './dialog/admin-room-edit/admin-room-edit.component';
import { AdminRoomDeleteComponent } from './dialog/admin-room-delete/admin-room-delete.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { RoomAdminDeleteComponent } from './dialog/room-admin-delete/room-admin-delete.component';
import { RoomAdminEditComponent } from './dialog/room-admin-edit/room-admin-edit.component';
import { RestaurantAdminEditComponent } from './dialog/restaurant-admin-edit/restaurant-admin-edit.component';
import { RestaurantAdminDeleteComponent } from './dialog/restaurant-admin-delete/restaurant-admin-delete.component';
import { RestaurantAdminAddComponent } from './restaurant-admin/restaurant-admin-add/restaurant-admin-add.component';
import { RestaurantAdminListComponent } from './restaurant-admin/restaurant-admin-list/restaurant-admin-list.component';
import { RoomAdminAddComponent } from './room-admin/room-admin-add/room-admin-add.component';
import { RoomAdminListComponent } from './room-admin/room-admin-list/room-admin-list.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDeleteComponent,
    AdminEditComponent,
    AdminRoomEditComponent,
    AdminRoomDeleteComponent,
    SuperAdminComponent,
    RoomAdminDeleteComponent,
    RoomAdminEditComponent,
    RestaurantAdminEditComponent,
    RestaurantAdminDeleteComponent,
    RestaurantAdminAddComponent,
    RestaurantAdminListComponent,
    RoomAdminAddComponent,
    RoomAdminListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatExpansionModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
