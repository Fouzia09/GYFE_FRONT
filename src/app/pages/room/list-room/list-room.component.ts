import { Component, OnInit,Input, } from '@angular/core';
import { Room } from '../../../interfaces/room';
import { RoomService } from '../../../services/room.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css'],
  providers: [RoomService]
})
export class ListRoomComponent implements OnInit {

  @Input() pageId!: number;
  rooms!: Room[];
  id!: number;

  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit() {
    this.roomService.getListRoom().subscribe((res: Room[]) => {
      this.rooms = res; 
     
    })
    
  }

}
