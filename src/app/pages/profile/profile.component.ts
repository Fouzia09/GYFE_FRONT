import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
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
    //la déconnection
    if(!this.auth.isLogged()){
      this.router.navigate(['/authentication/login']);
    }

    //console.log(this.auth.)
  }

}
