import { RoomAdminListComponent } from './room-admin/room-admin-list/room-admin-list.component';
import { RoomAdminAddComponent } from './room-admin/room-admin-add/room-admin-add.component';
import { RestaurantAdminListComponent } from './restaurant-admin/restaurant-admin-list/restaurant-admin-list.component';
import { RestaurantAdminAddComponent } from './restaurant-admin/restaurant-admin-add/restaurant-admin-add.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'restaurant-admin-add', component: RestaurantAdminAddComponent},
  {path: 'restaurant-admin-list', component: RestaurantAdminListComponent},
  {path: 'room-admin-add', component: RoomAdminAddComponent},
  {path: 'room-admin-list', component: RoomAdminListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
