import { Room } from './../../../../interfaces/room';
import { FormBuilder, Validators } from '@angular/forms';
import { RestaurantService } from './../../../../services/restaurant.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Restaurant } from './../../../../interfaces/restaurant';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  success: boolean = false;
  listrestaurant!: Restaurant[];

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
    @Inject(MAT_DIALOG_DATA) public data: Restaurant,
    private matDialogRef: MatDialogRef<AdminEditComponent>,
    private restaurantService: RestaurantService,
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
    this.namePlat = this.fb.control(this.data.namePlat, [Validators.required]);
    this.descriptifPlat = this.fb.control(this.data.descriptifPlat, [Validators.required]);
    this.price = this.fb.control(this.data.price, [Validators.required]);
    this.image1 = this.fb.control(this.data.image1, [Validators.required, Validators.minLength(4)]);
    this.image2 = this.fb.control(this.data.image2, [Validators.required]);
    this.rangePrice2 = this.fb.control(this.data.rangePrice2, [Validators.required]);
    this.rangePrice1 = this.fb.control(this.data.rangePrice1, [Validators.required]);
    this.address = this.fb.control(this.data.address, [Validators.required]);
    this.zipcode = this.fb.control(this.data.zipcode, [Validators.required]);
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

  editRestaurantAdmin(){
    const body = {
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
    //@ts-ignore
    this.restaurantService.updateRestaurant(body, this.data.id).subscribe(
      ()=>{
        this.success = true;
        setTimeout(()=>{
          this.success = false;
          location.reload();
        }, 5000)
      }
    )
  }

}
