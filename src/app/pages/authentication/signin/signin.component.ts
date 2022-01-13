import { Signin } from './../../../interfaces/signin';
import { SigninService } from './../../../services/signin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoading: boolean = false;
  errorApi: boolean = false;
  success: boolean = false;
  //@ts-ignore
  email: FormControl;
  //@ts-ignore
  roles: FormControl;
  //@ts-ignore
  name: FormControl;
  //@ts-ignore
  plainPassword: FormControl;
  //@ts-ignore
  username: FormControl;
  //@ts-ignore
  signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signinService: SigninService,
  ) { 
    this.createForm();
   }

  ngOnInit(): void {
    
  }

  onSubmit(){
    const body: Signin = {
      email : this.signinForm.value.email,
      //@ts-ignore
      roles : [this.signinForm.value.roles],
      name : this.signinForm.value.name,
      plainPassword : this.signinForm.value.plainPassword,
      username : this.signinForm.value.username,
    }
    //@ts-ignore
    //body.roles.push(this.signinForm.value.roles)

    //console.log(body);

    this.isLoading = true;

    this.signinService.postSignin(body).subscribe(
      (data: any)=>{
        this.success = true;
        this.isLoading = false;
        setTimeout(()=>{
          this.success = false;
        }, 5000)
        //console.log('OKK');
        //Nettoie le champs après l'envoie
        this.resetForm();
      },
      (error: any)=>{
        this.errorApi = true;
        this.isLoading = false;
        setTimeout(()=>{
          this.errorApi = false;
        }, 15000)
        //console.log('PAS ENVOYE');
        //Nettoie le champs après l'envoie
        this.resetForm();
      }
    );
  }

  private createForm(): void{
    this.email = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.roles = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.name = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.plainPassword = this.fb.control('', [Validators.required, Validators.minLength(5)]);
    this.username = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.signinForm = this.fb.group({
      email: this.email,
      roles: this.roles,
      name: this.name,
      plainPassword: this.plainPassword,
      username: this.username
    });
  }

  private resetForm(): void{
    this.signinForm.reset({
      email: '',
      roles: '',
      name: '',
      plainPassword: '',
      username: '',
    });
  }

}
