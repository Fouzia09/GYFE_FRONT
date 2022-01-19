import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { ProfileModule } from './pages/profile/profile.module';
import { DetailRoomComponent } from './pages/room/detail-room/detail-room.component';
import { RoomModule } from './pages/room/room.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'room',
    loadChildren: () => import('./pages/room/room.module').then(m => m.RoomModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./pages/restaurant/restaurant.module').then(m => m.RestaurantModule)
  },
  {
    path:'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path:'room',
    loadChildren: () => import('./pages/room/room.module').then(m => m.RoomModule)
  },
  { path: 'accueil', component: FilterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
