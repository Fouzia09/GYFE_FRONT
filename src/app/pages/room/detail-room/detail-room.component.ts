import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/interfaces/room';
import { RoomService } from './../../../services/room.service';

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styleUrls: ['./detail-room.component.css']
})
export class DetailRoomComponent implements OnInit {
  id!: number;
  room!: Room;

  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.url[1].path;
    this.getRoom(this.id);
    
  }
  getRoom(roomId: number){
    this.roomService.getRoom(roomId).subscribe(
      data=>{
        this.room = data;console.log(this.room)
      }
    )
  }

}
