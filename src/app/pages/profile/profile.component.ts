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
  user!: UserToken;
  name!: string;
  roles!: string[];
  email!: string;
  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
     this.name =this.auth.userLogged();
     this.roles =this.auth.userLoggedRoles();
    this.email = this.auth.userLoggedEmail();


    //la déconnection
    if(!this.auth.isLogged()){
      this.router.navigate(['/authentication/login']);
    }

    //console.log(this.auth.)
  }

}


