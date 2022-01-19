import { Restaurant } from './../../../interfaces/restaurant';
import { RestaurantService } from './../../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  //@ts-ignore
  listrestaurant : Restaurant[];

  constructor(
    private restaurantService: RestaurantService
  ) { 
    this.getRestaurants();
   }

  ngOnInit(): void {
  }

  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe(
      data=>{
        this.listrestaurant = data;
      }
    )
  }

  //openDetail(restaurant: Restaurant){
    //@ts-ignore
    /* this.restaurantService.getRestaurant(restaurant.id).subscribe(
      ()=>{
      }
    ) */
    //console.log(restaurant)
  //}

}
