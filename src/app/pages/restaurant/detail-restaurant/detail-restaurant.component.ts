import { Restaurant } from './../../../interfaces/restaurant';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.component.html',
  styleUrls: ['./detail-restaurant.component.css']
})
export class DetailRestaurantComponent implements OnInit {

  id!: number;
  restaurant!: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.url[1].path;
    this.getRestaurant(this.id);
  }

  getRestaurant(restaurantId: number){
    this.restaurantService.getRestaurant(restaurantId).subscribe(
      data=>{
        this.restaurant = data;
      }
    )
  }
}
