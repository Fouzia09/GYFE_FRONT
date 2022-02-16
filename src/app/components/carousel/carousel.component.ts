import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/interfaces/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  rooms!: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getListRoom().subscribe((res: Room[]) => {
      this.rooms = res; 
     
    })
  }

}
