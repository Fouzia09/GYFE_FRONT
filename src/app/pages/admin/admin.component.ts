import { AdminDeleteComponent } from './../../pages/admin/dialog/admin-delete/admin-delete.component';
import { Restaurant } from './../../interfaces/restaurant';
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
  rooms!: Room[];
  listrestaurant!: Restaurant[];
  isLoading: boolean = false;
  errorApi: boolean = false;
  success: boolean = false;
  //@ts-ignore
  name: FormControl;
   //@ts-ignore
  adresse: FormControl;
  //@ts-ignore
  zipcode: FormControl;
  //@ts-ignore
  city: FormControl;
  //@ts-ignore
  country: FormControl;
  //@ts-ignore
  rangePrice1: FormControl;
    //@ts-ignore
  rangePrice2: FormControl;
  //@ts-ignore
  descriptif: FormControl;
  //@ts-ignore
  image1: FormControl;
  //@ts-ignore
  namePlat: FormControl;
  //@ts-ignore
  price: FormControl;
  //@ts-ignore
  adminForm: FormGroup;


  constructor(private roomService: RoomService,  private restaurantService: RestaurantService, private matDialog: MatDialog, private fb: FormBuilder) {
    this.getRestaurants();
   }

  ngOnInit(): void {
    this.roomService.getListRoom().subscribe((res: Room[]) => {
      this.rooms = res;

    })
    this.createForm();
  }
  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe(
      (      data: Restaurant[])=>{
        this.listrestaurant = data;
      }
    )
  }

  /* onDeleteDialogClick(room: Room){
    let dialogDeleteRef = this.matDialog.open(AdminDeleteComponent,
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
        width: "500px",
        height: "275px",
      })
  } */

  onDeleteRestaurantDialogClick(restaurant: Restaurant){
    let dialogRef = this.matDialog.open(AdminDeleteComponent,
      {
        data: {
          id: restaurant.id,
          name: restaurant.name,
        },
        width: "500px",
        height: "275px",
      })
  }

  onSubmit(){
    const body: Restaurant = {
      name: this.adminForm.value.name,
      descriptif: this.adminForm.value.descriptif,
      country: this.adminForm.value.country,
      city: this.adminForm.value.city,
      namePlat: this.adminForm.value.namePlat,
      descriptifPlat: '',
      price: this.adminForm.value.price,
      image1: '',
      image2: '',
      image3: '',
      descriptifPlat2: '',
      descriptifPlat3: '',
      rangePrice2: this.adminForm.value.rangePrice1,
      rangePrice1: this.adminForm.value.rangePrice2,
      address: this.adminForm.value.adresse,
      zipcode: this.adminForm.value.zipcode
    }
    //@ts-ignore
    //body.roles.push(this.userForm.value.roles)

    //console.log(body);

    this.isLoading = true;

    this.restaurantService.postRestaurant(body).subscribe(
      (data: any)=>{
        this.success = true;
        this.isLoading = false;
        setTimeout(()=>{
          this.success = false;
        }, 5000)
        //console.log('OKK');
        //Nettoie le champs après l'envoie
       
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
    this.adresse = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.zipcode = this.fb.control('', [Validators.required]);
    this.city = this.fb.control('', [Validators.required]);
    this.country = this.fb.control('', [Validators.required]);
    this.rangePrice1 = this.fb.control('', [Validators.required]);
    this.rangePrice2 = this.fb.control('', [Validators.required]);
    this.descriptif = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.image1 = this.fb.control('', [Validators.required]);
    this.namePlat = this.fb.control('', [Validators.required, Validators.minLength(2)]);
    this.price = this.fb.control('', [Validators.required]);
    this.adminForm = this.fb.group({
      name: this.name,
      adresse: this.adresse,
      zipcode: this.zipcode,
      city: this.city,
      country: this.country,
      rangePrice1: this.rangePrice1,
      rangePrice2: this.rangePrice2,
      descriptif: this.descriptif,
      image1: this.image1,
      nomPlat: this.namePlat,
      price: this.price
    });
  }



}
