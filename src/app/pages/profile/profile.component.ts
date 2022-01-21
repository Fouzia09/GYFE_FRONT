import { User } from './../../interfaces/user';
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

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.userLogged();
    this.auth.userLoggedRoles();
    //la déconnection
    if(!this.auth.isLogged()){
      this.router.navigate(['/authentication/login']);
    }
  }

  //déconnexion
  logout(){
    this.auth.logout();
  }

}
