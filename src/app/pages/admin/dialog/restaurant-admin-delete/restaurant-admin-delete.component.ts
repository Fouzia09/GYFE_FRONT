import { Restaurant } from './../../../../interfaces/restaurant';
import { RestaurantService } from './../../../../services/restaurant.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-restaurant-admin-delete',
  templateUrl: './restaurant-admin-delete.component.html',
  styleUrls: ['./restaurant-admin-delete.component.css']
})
export class RestaurantAdminDeleteComponent implements OnInit {

  success: boolean = false;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Restaurant,
    private matDialogRef: MatDialogRef<RestaurantAdminDeleteComponent>,
    private restaurantService: RestaurantService,
  ) { }

  ngOnInit(): void {
  }

  onCloseClick(){
    this.matDialogRef.close(this.data);
  }

  deleteRestaurant(){
    //ts-ignore
    this.restaurantService.deleteRestaurant(this.data.id).subscribe(
      ()=>{
        this.success = true;
        setTimeout(()=>{
          this.success =false;
          location.reload();
        }, 3000)
      }
    )
  }

}
