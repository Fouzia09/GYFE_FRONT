import { Restaurant } from './../../../interfaces/restaurant';
import { RestaurantService } from './../../../services/restaurant.service';
import { Component, OnInit,Input, } from '@angular/core';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css'],
  providers: [RestaurantService]
})
export class ListRestaurantComponent implements OnInit {

  @Input() pageId!: number;
  restaurants!: Restaurant[];
  id!: number;
  searchedItems!: Restaurant[];
  // inputName!: string;
  // inputCity!: string;
  // inputCountry!: string;
  nameSearch: string = '';
  citySearch: string = '';
  countrySearch: string = '';
  priceSearch!: number;

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
        this.restaurants = data;
      }
    )
  }

}
