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
import { RoomAdminComponent } from './room-admin/room-admin.component';
import { RestaurantAdminComponent } from './restaurant-admin/restaurant-admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDeleteComponent,
    AdminEditComponent,
    AdminRoomEditComponent,
    AdminRoomDeleteComponent,
    SuperAdminComponent,
    RoomAdminComponent,
    RestaurantAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatExpansionModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
