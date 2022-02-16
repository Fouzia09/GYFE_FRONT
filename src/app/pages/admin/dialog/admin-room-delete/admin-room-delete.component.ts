import { RoomService } from './../../../../services/room.service';
import { Room } from 'src/app/interfaces/room';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-admin-room-delete',
  templateUrl: './admin-room-delete.component.html',
  styleUrls: ['./admin-room-delete.component.css']
})
export class AdminRoomDeleteComponent implements OnInit {

  success: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Room,
    private matDialogRef: MatDialogRef<AdminRoomDeleteComponent>,
    private roomService: RoomService,
  ) { }

  ngOnInit(): void {
  }
  onCloseClick(){
    this.matDialogRef.close(this.data);
  }

  deleteRoom(){
    //ts-ignore
    this.roomService.deleteRoom(this.data.id).subscribe(
      ()=>{
        this.success = true;
        setTimeout(()=>{
          this.success =false;
          location.reload();
        }, 3000)
      }
    )
  }

}
