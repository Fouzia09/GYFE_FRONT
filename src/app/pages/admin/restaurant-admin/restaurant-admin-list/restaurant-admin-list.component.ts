import { RestaurantService } from './../../../../services/restaurant.service';
import { RestaurantAdminDeleteComponent } from './../../dialog/restaurant-admin-delete/restaurant-admin-delete.component';
import { RestaurantAdminEditComponent } from './../../dialog/restaurant-admin-edit/restaurant-admin-edit.component';
import { Restaurant } from './../../../../interfaces/restaurant';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-restaurant-admin-list',
  templateUrl: './restaurant-admin-list.component.html',
  styleUrls: ['./restaurant-admin-list.component.css']
})
export class RestaurantAdminListComponent implements OnInit {

  listrestaurant!: Restaurant[];
  isLoading: boolean = false;
  errorApi: boolean = false;
  success: boolean = false;

  
  constructor(
    private restaurantService: RestaurantService, 
    private matDialog: MatDialog
    ) {
    this.getRestaurants();
   }

  ngOnInit(): void {
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
}
