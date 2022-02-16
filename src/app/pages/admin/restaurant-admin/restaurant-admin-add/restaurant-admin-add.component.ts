import { RestaurantService } from './../../../../services/restaurant.service';
import { RestaurantAdminDeleteComponent } from './../../dialog/restaurant-admin-delete/restaurant-admin-delete.component';
import { RestaurantAdminEditComponent } from './../../dialog/restaurant-admin-edit/restaurant-admin-edit.component';
import { Restaurant } from './../../../../interfaces/restaurant';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-restaurant-admin-add',
  templateUrl: './restaurant-admin-add.component.html',
  styleUrls: ['./restaurant-admin-add.component.css']
})
export class RestaurantAdminAddComponent implements OnInit {

  panelOpenState = false;
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

  constructor(
    private restaurantService: RestaurantService, 
    private matDialog: MatDialog, 
    private fb: FormBuilder) {
    this.getRestaurants();
   }

  ngOnInit(): void {
    this.createForm();
  }
  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe(
      (      data: Restaurant[])=>{
        this.listrestaurant = data;
      }
    )
  }

  onDeleteRestaurantDialogClick(restaurant: Restaurant){
    let dialogRestaurantRef = this.matDialog.open(RestaurantAdminDeleteComponent,
      {
        data: {
          id: restaurant.id,
          name: restaurant.name,
        },
        width: "500px",
        height: "275px",
      })
  }

  onOpenRestaurantDialogClick(restaurant: Restaurant){
    let dialogRef = this.matDialog.open(RestaurantAdminEditComponent,
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

}
