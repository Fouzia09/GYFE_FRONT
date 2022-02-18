import { UserOUT } from './../../../../interfaces/user';
import { RoomAdminEditComponent } from './../../dialog/room-admin-edit/room-admin-edit.component';
import { RoomAdminDeleteComponent } from './../../dialog/room-admin-delete/room-admin-delete.component';
import { RoomService } from './../../../../services/room.service';
import { Room, RoomOUT } from './../../../../interfaces/room';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-room-admin-list',
  templateUrl: './room-admin-list.component.html',
  styleUrls: ['./room-admin-list.component.css']
})
export class RoomAdminListComponent implements OnInit {

  listroom!: Room[];
  isLoading: boolean = false;
  errorApi: boolean = false;
  success: boolean = false;
  rooms!: RoomOUT[];

  
  constructor(
    private roomService: RoomService,  
    private matDialog: MatDialog, 
    ) {
    this.getRooms();
   }

  ngOnInit(): void {
  }

  getRooms(): void {
    let userLoggedInfo: UserOUT | string;
    userLoggedInfo = localStorage.getItem('userLoggedInfo') as string;
    userLoggedInfo = JSON.parse(userLoggedInfo) as UserOUT;
    this.rooms = userLoggedInfo.rooms as RoomOUT[];
  }

  /* getRooms(){
    this.roomService.getListRoom().subscribe(
      (      data: Room[])=>{
        this.listroom = data;
      }
    )
  }
 */
  onDeleteRoomDialogClick(room: RoomOUT){
    let dialogRoomRef = this.matDialog.open(RoomAdminDeleteComponent,
      {
        data: {
          id: room.id,
          name: room.name,
        },
        width: "500px",
        height: "275px",
      })
  }

  onOpenRoomDialogClick(room: RoomOUT){
    let dialogRef = this.matDialog.open(RoomAdminEditComponent,
      {
        data: {
          id: room.id,
          name: room.name,
          descriptif: room.description,
          country: room.country,
          city: room.city,
          price: room.price,
          image1: room.image1,
          image2: room.image2,
          image3: room.image3,
          isKingSize: room.isKingSize,
          nbBed: room.nbBed,
          squarFeet: room.squarFeet,
          address: room.address,
          zipcode: room.zipCode,
        },
        width: "1000px",
        height: "800px",
      })
  }

}
