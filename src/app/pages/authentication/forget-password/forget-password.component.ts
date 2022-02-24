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
  loading = false;
  submitted = false;
  success: boolean = false;


  //@ts-ignore
  email: FormControl;
  //@ts-ignore
  resetPasswordForm: FormGroup;


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
    this.resetPasswordForm = this.fb.group({
      email: this.email,
    });
  }

  resetPasswordUser(){
    const body = {
      email: this.resetPasswordForm.value.email,
      plainPassword: this.generatePassword(),
    }
    console.log(body.plainPassword)

      //@ts-ignore
      this.userService.resetPassword(body, body.email).subscribe(
        ()=>{
          console.log(body.plainPassword)
          /* this.success = true;
          setTimeout(()=>{
            this.success = false;
            location.reload();
          }, 5000) */
          //this.resetForm();
        }
      )
  }

  generatePassword() {
    var length = 8,
        charset = "aaabbbcccdddeeeafffggghhhiiijjj!%@&;$+=?kkklllmmmnnnooopppaqqqrrrssstttuuuvvvawww!%@&;$+=?xxxyyyzzz000111222333444555666777888999!%@&;$+=?AAAaBBBCCCDDDEEEFFFGGG!%@&;$+=?HHHIIIJJJKKKLLLMMMNNNOOOPPPQQQRRRSSST!%@&;$+=?TTUUUVVVWWWXXXYYYZZZ",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

}
