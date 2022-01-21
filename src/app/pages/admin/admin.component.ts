import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../interfaces/room';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  panelOpenState = false;
  rooms!: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getListRoom().subscribe((res: Room[]) => {
      this.rooms = res; 
     
    })
  }

}
