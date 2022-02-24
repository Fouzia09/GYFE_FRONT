import { AuthenticationService } from '../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorAuthentication: boolean = false;
  isLoading: boolean = false;

 
  //@ts-ignore
  username: FormControl;
  //@ts-ignore
  password: FormControl;
  //@ts-ignore
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private userService: UserService,
    private router: Router
    ) { 
    this.username = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.password = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const body = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    this.isLoading = true;

    this.auth.logOn(body).subscribe(
      (data: Object)=>{
        this.auth.seTtoken(data);
        this.setUserInLocalStorage();
        this.isLoading = false;
        this.goPageProfil();
      },
      (error: any)=>{
        this.errorAuthentication = true;
      }
    );
  }

  setUserInLocalStorage(): void {
    this.userService.getUserByUsername(this.auth.userLoggedUsername()).subscribe(
      userLoggedInfo => {
        this.auth.setInLocalStorage('userLoggedInfo', JSON.stringify(userLoggedInfo));
        this.auth.setInLocalStorage('userString', `api/users/${userLoggedInfo.id.toString()}`);
        this.goPageProfil();
      },
      error => {
        console.log(error);
      });
  }

  private goPageProfil(): void{
    this.router.navigate(['/profile']);
  }

}
