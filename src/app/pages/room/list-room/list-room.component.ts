import { Component, OnInit } from '@angular/core';
import { Room } from '../../../interfaces/room';
import { RoomService } from '../../../services/room.service';


@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css'],
  providers: [RoomService]
})
export class ListRoomComponent implements OnInit {


  rooms!: Room[];

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.roomService.getListRoom().subscribe((res: Room[]) => {
      this.rooms = res 
      console.log(res)
    })
  }
  
}
