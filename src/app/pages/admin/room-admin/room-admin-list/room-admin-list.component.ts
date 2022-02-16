import { RoomAdminEditComponent } from './../../dialog/room-admin-edit/room-admin-edit.component';
import { RoomAdminDeleteComponent } from './../../dialog/room-admin-delete/room-admin-delete.component';
import { RoomService } from './../../../../services/room.service';
import { Room } from './../../../../interfaces/room';
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

  
  constructor(
    private roomService: RoomService,  
    private matDialog: MatDialog, 
    ) {
    this.getRooms();
   }

  ngOnInit(): void {
  }

  getRooms(){
    this.roomService.getListRoom().subscribe(
      (      data: Room[])=>{
        this.listroom = data;
      }
    )
  }

  onDeleteRoomDialogClick(room: Room){
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

  onOpenRoomDialogClick(room: Room){
    let dialogRef = this.matDialog.open(RoomAdminEditComponent,
      {
        data: {
          id: room.id,
          name: room.name,
          descriptif: room.descriptif,
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
          zipcode: room.zipcode,
        },
        width: "1000px",
        height: "800px",
      })
  }

}
