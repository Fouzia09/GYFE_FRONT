import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-password-edit',
  templateUrl: './password-edit.component.html',
  styleUrls: ['./password-edit.component.css']
})
export class PasswordEditComponent implements OnInit {

    //@ts-ignore
    fieldTextType: boolean;
    //@ts-ignore
    plainPassword: FormControl;
    //@ts-ignore
    confirmPlainPassword: FormControl;
    //@ts-ignore
    userForm: FormGroup;
    //@ts-ignore
    success: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: User,
  private matDialogRef: MatDialogRef<PasswordEditComponent>,
  private userService: UserService,
  private fb: FormBuilder,) { 
    this.createForm()
   }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.matDialogRef.close();
  }

  private createForm(): void{
    this.plainPassword = this.fb.control(this.data.plainPassword, [Validators.required, Validators.minLength(4)]);
    this.confirmPlainPassword = this.fb.control(this.data.plainPassword, [Validators.required, Validators.minLength(4)]);
    this.userForm = this.fb.group({
      plainPassword: this.plainPassword,
      confirmPlainPassword: this.confirmPlainPassword,

    });
  }

  changePassword(){
    const body = {
      plainPassword: this.userForm.value.plainPassword,
    }
    //@ts-ignore
    this.userService.updateUser(body, this.data.id).subscribe(
      ()=>{
        this.success = true;
        setTimeout(()=>{
          this.success = false;
          location.reload();
        }, 5000)
      }
    )
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
