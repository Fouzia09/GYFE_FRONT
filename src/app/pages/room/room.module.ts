import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';

import { RoomRoutingModule } from './room-routing.module';
import { DetailRoomComponent } from './detail-room/detail-room.component';


@NgModule({
  declarations: [
    DetailRoomComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    ComponentsModule
  ]
})
export class RoomModule { }
