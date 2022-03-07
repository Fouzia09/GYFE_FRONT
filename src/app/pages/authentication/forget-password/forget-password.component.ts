import { User } from 'src/app/interfaces/user';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { first,finalize } from 'rxjs/operators';
import { AuthenticationService } from './../../../services/authentication.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  isLoading: boolean = false;
  success: boolean = false;
  errorAuthentication: boolean = false;


  //@ts-ignore
  email: FormControl;
  //@ts-ignore
  forgotForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm(): void{
    this.email = this.fb.control('', [Validators.required]);
    this.forgotForm = this.fb.group({
      email: this.email,
    });
  }

  resetPasswordUser(){
    const body = {
      email: this.forgotForm.value.email,
    }

      //@ts-ignore
      this.userService.reset(body, body.email).subscribe(
        ()=>{
          this.success = true;
          this.isLoading = false;
          setTimeout(()=>{
            this.success = false;
          }, 10000)
          this.resetForm();
        },
        (error:any)=>{
          this.errorAuthentication = true;
          this.isLoading = false;
          setTimeout(()=>{
            this.errorAuthentication = false;
          }, 10000)
        }
      )
  }

  private resetForm(): void{
    this.forgotForm.reset({
      email: ''
    });
  }

}
