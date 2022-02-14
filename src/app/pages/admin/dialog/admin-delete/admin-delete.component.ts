import { RestaurantService } from './../../../../services/restaurant.service';
import { Room } from './../../../../interfaces/room';
import { RoomService } from './../../../../services/room.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {

  success: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Room,
    private matDialogRef: MatDialogRef<AdminDeleteComponent>,
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
