import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';
import { AdminDeleteComponent } from '../dialog/admin-delete/admin-delete.component';
import { UserService } from './../../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminEditComponent } from '../dialog/admin-edit/admin-edit.component';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {

  users!: User[]


  constructor( private userService: UserService, private matDialog: MatDialog,) { 
    this.getUsers()
  }

  ngOnInit(): void {
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (      data: User[])=>{
        this.users = data;
        
      }
      
    )
  }
  onDeleteUserDialogClick(user: User) {
    let dialogUserRef = this.matDialog.open(AdminDeleteComponent,
      {
        data: {
          id: user.id,
          name: user.name,
        },
        width: "500px",
        height: "275px",
      })

      console.log(user)
  }


  onOpenUserDialogClick(user: User){
    let dialogRef = this.matDialog.open(AdminEditComponent,
      {
        data: {
          id: user.id,
          email: user.email,
          roles: user.roles,
          name: user.name,
          username: user.username,
        },
        width: "1000px",
        height: "800px",
      })

  }

}
