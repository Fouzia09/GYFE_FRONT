import { Restaurant } from './../../interfaces/restaurant';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../interfaces/room';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  panelOpenState = false;
  rooms!: Room[];
  listrestaurant!: Restaurant[];


  constructor(private roomService: RoomService,  private restaurantService: RestaurantService) {
    this.getRestaurants();
   }

  ngOnInit(): void {
    this.roomService.getListRoom().subscribe((res: Room[]) => {
      this.rooms = res;

    })

  }
  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe(
      (      data: Restaurant[])=>{
        this.listrestaurant = data;
      }
    )
  }

}
