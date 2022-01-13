import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorAuthentication: boolean = false;
  isLoading: boolean = false;

 
  //@ts-ignore
  email: FormControl;
  //@ts-ignore
  password: FormControl;
  //@ts-ignore
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
    ) { 
    this.email = this.fb.control('', [Validators.required, Validators.minLength(5)]);
    this.password = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.loginForm = this.fb.group({
      email: this.email,
      password: this.password
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    const body = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.isLoading = true;

    this.auth.logOn(body).subscribe(
      (data: any)=>{
        this.auth.seTtoken(data.token);
        this.goPageService();
        this.isLoading = false;
      },
      (error: any)=>{
        this.errorAuthentication = true;
      }
    );
  }

  private goPageService(): void{
    this.router.navigate(['authentication/sign-in']);
  }

}
