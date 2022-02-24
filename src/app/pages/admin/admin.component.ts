import { AdminRoomDeleteComponent } from './dialog/admin-room-delete/admin-room-delete.component';
import { AdminRoomEditComponent } from './dialog/admin-room-edit/admin-room-edit.component';
import { AdminEditComponent } from './dialog/admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './../../pages/admin/dialog/admin-delete/admin-delete.component';
import { Restaurant } from '../../interfaces/restaurant';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../interfaces/room';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  panelOpenState = false;
  listroom!: Room[];
  listrestaurant!: Restaurant[];
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
  namePlat: FormControl;
  //@ts-ignore
  descriptifPlat: FormControl;
  //@ts-ignore
  price: FormControl;
  //@ts-ignore
  image1: FormControl;
  //@ts-ignore
  image2: FormControl;
  //@ts-ignore
  image3: FormControl;
  //@ts-ignore
  rangePrice2: FormControl;
  //@ts-ignore
  rangePrice1: FormControl;
  //@ts-ignore
  address: FormControl;
  //@ts-ignore
  zipcode: FormControl;
  //@ts-ignore
  adminForm: FormGroup;

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
    private restaurantService: RestaurantService, 
    private matDialog: MatDialog, 
    private fb: FormBuilder) {
    this.getRestaurants();
    this.getRooms();
   }

  ngOnInit(): void {
    /* this.roomService.getListRoom().subscribe((res: Room[]) => {
      this.listroom = res;

    }) */
    this.createForm();
    //this.createRoomForm();
  }
  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe(
      (      data: Restaurant[])=>{
        this.listrestaurant = data;
      }
    )
  }

  getRooms(){
    this.roomService.getListRoom().subscribe(
      (      data: Room[])=>{
        this.listroom = data;
      }
    )
  }

  onDeleteRestaurantDialogClick(restaurant: Restaurant){
    let dialogRestaurantRef = this.matDialog.open(AdminDeleteComponent,
      {
        data: {
          id: restaurant.id,
          name: restaurant.name,
        },
        width: "500px",
        height: "275px",
      })
  }

  /* onDeleteRoomDialogClick(room: Room){
    let dialogRoomRef = this.matDialog.open(AdminRoomDeleteComponent,
      {
        data: {
          id: room.id,
          name: room.name,
        },
        width: "500px",
        height: "275px",
      })
  } */

  onOpenRestaurantDialogClick(restaurant: Restaurant){
    let dialogRef = this.matDialog.open(AdminEditComponent,
      {
        data: {
          id: restaurant.id,
          name: restaurant.name,
          descriptif: restaurant.descriptif,
          country: restaurant.country,
          city: restaurant.city,
          namePlat: restaurant.namePlat,
          descriptifPlat: restaurant.descriptifPlat,
          price: restaurant.price,
          image1: restaurant.image1,
          image2: restaurant.image2,
          rangePrice2: restaurant.rangePrice2,
          rangePrice1: restaurant.rangePrice1,
          address: restaurant.address,
          zipcode: restaurant.zipcode,
        },
        width: "1000px",
        height: "800px",
      })
  }

  /* onOpenRoomDialogClick(room: Room){
    let dialogRef = this.matDialog.open(AdminRoomEditComponent,
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
  } */

  onSubmit(){
    const body: Restaurant = {
      id: this.adminForm.value.id,
      name: this.adminForm.value.name,
      descriptif: this.adminForm.value.descriptif,
      country: this.adminForm.value.country,
      city: this.adminForm.value.city,
      namePlat: this.adminForm.value.namePlat,
      descriptifPlat: this.adminForm.value.descriptifPlat,
      price: this.adminForm.value.price,
      image1: this.adminForm.value.image1,
      image2: this.adminForm.value.image2,
      rangePrice2: this.adminForm.value.rangePrice2,
      rangePrice1: this.adminForm.value.rangePrice1,
      address: this.adminForm.value.address,
      zipcode: this.adminForm.value.zipcode
    }
    this.isLoading = true;

    this.restaurantService.postRestaurant(body).subscribe(
      (data: any)=>{
        this.success = true;
        this.isLoading = false;
        setTimeout(()=>{
          this.success = false;
        }, 5000)
        console.log(body);
        //Nettoie le champs après l'envoie
        this.resetForm();
        this.getRestaurants();
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

  /* onSubmitRoom(){
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
        this.resetRoomForm();
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
  } */

  private createForm(): void{
    this.name = this.fb.control('', [Validators.required, Validators.minLength(2)]);
    this.descriptif = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.country = this.fb.control('', [Validators.required]);
    this.city = this.fb.control('', [Validators.required]);
    this.namePlat = this.fb.control('', [Validators.required]);
    this.descriptifPlat = this.fb.control('', [Validators.required]);
    this.price = this.fb.control('', [Validators.required]);
    this.image1 = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.image2 = this.fb.control('', [Validators.required]);
    this.rangePrice2 = this.fb.control('', [Validators.required]);
    this.rangePrice1 = this.fb.control('', [Validators.required]);
    this.address = this.fb.control('', [Validators.required]);
    this.zipcode = this.fb.control('', [Validators.required]);
    this.adminForm = this.fb.group({
      name: this.name,
      descriptif: this.descriptif,
      country: this.country,
      city: this.city,
      namePlat: this.namePlat,
      descriptifPlat: this.descriptifPlat,
      price: this.price,
      image1: this.image1,
      image2: this.image2,
      rangePrice2: this.rangePrice2,
      rangePrice1: this.rangePrice1,
      address: this.address,
      zipcode: this.zipcode,
    });
  }


  /* private createRoomForm(): void{
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
  } */

  private resetForm(): void{
    this.adminForm.reset({
      name: '',
      descriptif: '',
      country: '',
      city: '',
      namePlat: '',
      descriptifPlat: '',
      price: '',
      image1: '',
      image2: '',
      rangePrice2: '',
      rangePrice1: '',
      address: '',
      zipcode: '',
    });
  }

  /* private resetRoomForm(): void{
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
  } */

}
