import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  //@ts-ignore
  password: FormControl;
  //@ts-ignore
  userEditForm: FormGroup;
  success!: boolean;
  
  constructor(private userService: UserService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void{
    this.password = this.fb.control( [Validators.required, Validators.minLength(2)]);
    this.userEditForm = this.fb.group({
      password: this.password,

    });
  }

  editUserPassword(){
    const body = {
      password: this.userEditForm.value.password,

    }
    //@ts-ignore
    this.userService.updateUser(body, this.id).subscribe(
      ()=>{
        this.success = true;
        setTimeout(()=>{
          this.success = false;
          location.reload();
        }, 3000)
      }
    )
  }
}
