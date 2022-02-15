import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDeleteComponent } from './dialog/admin-delete/admin-delete.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDeleteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatExpansionModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
