import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { RoomService } from './../../../../services/room.service';
import { Room } from 'src/app/interfaces/room';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-room-admin-delete',
  templateUrl: './room-admin-delete.component.html',
  styleUrls: ['./room-admin-delete.component.css']
})
export class RoomAdminDeleteComponent implements OnInit {

  success: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<RoomAdminDeleteComponent>,
    private roomService: RoomService,
    private userService: UserService,
    private authenticationService: AuthenticationService
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
          this.updateUserInfoInLocalStorage();
        }, 3000)
      }
    )
  }

  updateUserInfoInLocalStorage(): void {
    this.userService.getUserByUsername(this.authenticationService.userLoggedUsername()).subscribe(
      userLoggedInfo => {
        this.authenticationService.setInLocalStorage('userLoggedInfo', JSON.stringify(userLoggedInfo));
        location.reload();
      });
  }

}
