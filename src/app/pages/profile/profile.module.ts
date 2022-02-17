import { ConfirmEqualValidatorDirective } from './../../shared/confirm-equal-validator.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ComponentsModule } from '../../components/components.module';
import { PasswordEditComponent } from './dialog/password-edit/password-edit.component';



@NgModule({
  declarations: [
    ProfileComponent,
    PasswordEditComponent,
    ConfirmEqualValidatorDirective,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ComponentsModule,
    ReactiveFormsModule 
  ]
})
export class ProfileModule { }
