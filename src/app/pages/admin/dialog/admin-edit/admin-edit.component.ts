import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Restaurant } from './../../../../interfaces/restaurant';
import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  success: boolean = false;


  //@ts-ignore
  name: FormControl;
  //@ts-ignore
  username: FormControl;
  //@ts-ignore
  email: FormControl;
  //@ts-ignore
  roles: FormControl;
  //@ts-ignore
  userForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private matDialogRef: MatDialogRef<AdminEditComponent>,
    private userService: UserService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  onCloseClick(){
    this.matDialogRef.close();
  }

  private createForm(): void{
    this.name = this.fb.control(this.data.name, [Validators.required, Validators.minLength(2)]);
    this.username = this.fb.control(this.data.username, [Validators.required, Validators.minLength(4)]);
    this.email = this.fb.control(this.data.email, [Validators.required]);
    this.roles = this.fb.control(this.data.roles, [Validators.required]);
    this.userForm = this.fb.group({
      name: this.name,
      username: this.username,
      email: this.email,
      roles: this.roles,
    });
  }

  editUserAdmin(){
    const body = {
      name: this.userForm.value.name,
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      roles: this.userForm.value.roles,

    }
    //@ts-ignore
    this.userService.updateUser(body, this.data.id).subscribe(
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
