import { FormBuilder, Validators } from '@angular/forms';
import { RoomService } from './../../../../services/room.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Room } from './../../../../interfaces/room';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-room-admin-edit',
  templateUrl: './room-admin-edit.component.html',
  styleUrls: ['./room-admin-edit.component.css']
})
export class RoomAdminEditComponent implements OnInit {

  success: boolean = false;
  listroom!: Room[];

  //@ts-ignore
  name: FormControl;
  //@ts-ignore
  descriptif: FormControl;
  //@ts-ignore
  country: FormControl;
  //@ts-ignore
  city: FormControl;
  //@ts-ignore
  price: FormControl;
  //@ts-ignore
  image1: FormControl;
  //@ts-ignore
  image2: FormControl;
  //@ts-ignore
  image3: FormControl;
  //@ts-ignore
  address: FormControl;
  //@ts-ignore
  zipcode: FormControl;

  //@ts-ignore
  isKingSize: FormControl;
  //@ts-ignore
  nbBed: FormControl;
  //@ts-ignore
  squarFeet: FormControl;
  //@ts-ignore
  adminRoomForm: FormGroup;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Room,
    private matDialogRef: MatDialogRef<RoomAdminEditComponent>,
    private roomService: RoomService,
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
    this.descriptif = this.fb.control(this.data.descriptif, [Validators.required, Validators.minLength(4)]);
    this.country = this.fb.control(this.data.country, [Validators.required]);
    this.city = this.fb.control(this.data.city, [Validators.required]);
    this.price = this.fb.control(this.data.price, [Validators.required]);
    this.image1 = this.fb.control(this.data.image1, [Validators.required]);
    this.image2 = this.fb.control(this.data.image2, [Validators.required]);
    this.image3 = this.fb.control(this.data.image3, [Validators.required]);
    this.isKingSize = this.fb.control(this.data.isKingSize, [Validators.required]);
    this.nbBed = this.fb.control(this.data.nbBed, [Validators.required]);
    this.squarFeet = this.fb.control(this.data.squarFeet, [Validators.required]);
    this.address = this.fb.control(this.data.address, [Validators.required]);
    this.zipcode = this.fb.control(this.data.zipcode, [Validators.required]);
    this.adminRoomForm = this.fb.group({
      name: this.name,
      descriptif: this.descriptif,
      country: this.country,
      city: this.city,
      price: this.price,
      image1: this.image1,
      image2: this.image2,
      image3: this.image3,
      isKingSize: this.isKingSize,
      nbBed: this.nbBed,
      squarFeet: this.squarFeet,
      address: this.address,
      zipcode: this.zipcode,
    });
  }

  editRoomAdmin(){
    const body = {
      name: this.adminRoomForm.value.name,
      descriptif: this.adminRoomForm.value.descriptif,
      country: this.adminRoomForm.value.country,
      city: this.adminRoomForm.value.city,
      price: this.adminRoomForm.value.price,
      image1: this.adminRoomForm.value.image1,
      image2: this.adminRoomForm.value.image2,
      image3: this.adminRoomForm.value.image3,
      isKingSize: this.adminRoomForm.value.isKingSize,
      nbBed: this.adminRoomForm.value.nbBed,
      squarFeet: this.adminRoomForm.value.squarFeet,
      address: this.adminRoomForm.value.address,
      zipcode: this.adminRoomForm.value.zipcode
    }
    //@ts-ignore
    this.roomService.updateRoom(body, this.data.id).subscribe(
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
