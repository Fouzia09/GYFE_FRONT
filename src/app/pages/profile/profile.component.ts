import { PasswordEditComponent } from './dialog/password-edit/password-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../../services/user.service';
import { User, UserToken } from './../../interfaces/user';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //@ts-ignore
  currentuser : User;

  username!: string;
  roles!: string[];
  email!: string;
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private currentuserService: UserService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
     this.username =this.auth.userLoggedUsername();
     this.roles =this.auth.userLoggedRoles();
    this.email = this.auth.userLoggedEmail();

    //la déconnection
    if(!this.auth.isLogged()){
      this.router.navigate(['/authentication/login']);
    }

    this.getCurrentUser();
  }

  getCurrentUser(){
    this.currentuserService.getCurrentUser().subscribe(
      (data)=>{
        //@ts-ignore
        this.currentuser = data;
      }
    )
  }

  //déconnexion
  logout(){
    this.auth.logout();
  }

  onOpenDialogEditPassword(currentuser: User) {
    let dialogRef = this.matDialog.open(PasswordEditComponent,
      {
        data: {
          id: currentuser.id,
          plainPassword: currentuser.plainPassword,
        },
        width: "500px",
        height: "400px",
      })
  }

}


