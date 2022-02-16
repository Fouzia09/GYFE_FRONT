import { RoomAdminEditComponent } from './../../dialog/room-admin-edit/room-admin-edit.component';
import { RoomService } from './../../../../services/room.service';
import { RoomAdminDeleteComponent } from './../../dialog/room-admin-delete/room-admin-delete.component';
import { Room } from 'src/app/interfaces/room';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-room-admin-add',
  templateUrl: './room-admin-add.component.html',
  styleUrls: ['./room-admin-add.component.css']
})
export class RoomAdminAddComponent implements OnInit {

  listroom!: Room[];
  isLoading: boolean = false;
  errorApi: boolean = false;
  success: boolean = false;

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
    private roomService: RoomService,  
    private matDialog: MatDialog, 
    private fb: FormBuilder) {
    this.getRooms();
   }

  ngOnInit(): void {
    this.createForm();
  }

  getRooms(){
    this.roomService.getListRoom().subscribe(
      (      data: Room[])=>{
        this.listroom = data;
      }
    )
  }

  onDeleteRoomDialogClick(room: Room){
    let dialogRoomRef = this.matDialog.open(RoomAdminDeleteComponent,
      {
        data: {
          id: room.id,
          name: room.name,
        },
        width: "500px",
        height: "275px",
      })
  }

  onOpenRoomDialogClick(room: Room){
    let dialogRef = this.matDialog.open(RoomAdminEditComponent,
      {
        data: {
          id: room.id,
          name: room.name,
          descriptif: room.descriptif,
          country: room.country,
          city: room.city,
          price: room.price,
          image1: room.image1,
          image2: room.image2,
          image3: room.image3,
          isKingSize: room.isKingSize,
          nbBed: room.nbBed,
          squarFeet: room.squarFeet,
          address: room.address,
          zipcode: room.zipcode,
        },
        width: "1000px",
        height: "800px",
      })
  }

  onSubmit(){
    const body: Room = {
      id: this.adminRoomForm.value.id,
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
    this.isLoading = true;

    this.roomService.postRoom(body).subscribe(
      (data: any)=>{
        this.success = true;
        this.isLoading = false;
        setTimeout(()=>{
          this.success = false;
        }, 5000)
        console.log(body);
        //Nettoie le champs après l'envoie
        this.resetForm();
        this.getRooms();
      },
      (error: any)=>{
        this.errorApi = true;
        this.isLoading = false;
        setTimeout(()=>{
          this.errorApi = false;
        }, 15000)
        //console.log('PAS ENVOYE');
        //Nettoie le champs après l'envoie
        
      }
    );
  }


  private createForm(): void{
    this.name = this.fb.control('', [Validators.required, Validators.minLength(2)]);
    this.descriptif = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.country = this.fb.control('', [Validators.required]);
    this.city = this.fb.control('', [Validators.required]);
    this.price = this.fb.control('', [Validators.required]);
    this.image1 = this.fb.control('', [Validators.required]);
    this.image2 = this.fb.control('', [Validators.required]);
    this.image3 = this.fb.control('', [Validators.required]);
    this.isKingSize = this.fb.control('', [Validators.required]);
    this.nbBed = this.fb.control('', [Validators.required]);
    this.squarFeet = this.fb.control('', [Validators.required]);
    this.address = this.fb.control('', [Validators.required]);
    this.zipcode = this.fb.control('', [Validators.required]);
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

  private resetForm(): void{
    this.adminRoomForm.reset({
      name: '',
      descriptif: '',
      country: '',
      city: '',
      price: '',
      image1: '',
      image2: '',
      image3: '',
      isKingSize: '',
      nbBed: '',
      squarFeet: '',
      address: '',
      zipcode: '',
    });
  }

}
