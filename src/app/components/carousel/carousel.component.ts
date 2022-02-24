import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { RoomService } from '../../services/room.service';
import { RestaurantOUT } from '../../interfaces/restaurant';
import { RoomOUT } from '../../interfaces/room';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  restaurants!: RestaurantOUT[];
  rooms!: RoomOUT[];
  loadingRestaurants!: boolean;
  loadingRooms!: boolean;

  constructor(private restaurantService: RestaurantService, private roomService: RoomService) { }

  ngOnInit(): void {
    this.getRestaurants();
    this.getRooms();
  }

  getRestaurants(): void {
    this.loadingRestaurants = true;
    this.restaurantService.getThreeLastRestaurants().subscribe(
      restaurants => {
        this.restaurants = restaurants;
        this.loadingRestaurants = false;console.log('restaurants', this.restaurants);
      });
  }

  getRooms(): void {
    this.loadingRooms = true;
    this.roomService.getThreeLastRooms().subscribe(
      rooms => {
        this.rooms = rooms;
        this.loadingRooms = false;console.log('rooms', this.rooms);
      });
  }

}
