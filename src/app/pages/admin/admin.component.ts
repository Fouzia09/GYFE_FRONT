import { AdminDeleteComponent } from './../../pages/admin/dialog/admin-delete/admin-delete.component';
import { Restaurant } from './../../interfaces/restaurant';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../interfaces/room';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  panelOpenState = false;
  rooms!: Room[];
  listrestaurant!: Restaurant[];


  constructor(private roomService: RoomService,  private restaurantService: RestaurantService, private matDialog: MatDialog) {
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

}
