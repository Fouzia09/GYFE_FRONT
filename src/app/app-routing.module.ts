import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DetailsComponent } from './components/details/details.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path:"sign-in",
    component: SigninComponent
  },
  {
    path:"sign-up",
    component: SignupComponent
  },
  {
    path: 'detail',
    component: DetailsComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
