import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './list-room/search.pipe';

import { RoomRoutingModule } from './room-routing.module';
import { DetailRoomComponent } from './detail-room/detail-room.component';
import { ListRoomComponent } from './list-room/list-room.component';


@NgModule({
  declarations: [
    DetailRoomComponent,
    ListRoomComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RoomModule { }
