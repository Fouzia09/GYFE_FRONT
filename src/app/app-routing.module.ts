import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'room',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'room',
    loadChildren: () => import('./pages/room/room.module').then(m => m.RoomModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
