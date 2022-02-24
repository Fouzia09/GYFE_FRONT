import { Component, OnInit,Input, } from '@angular/core';
import { Room } from '../../../interfaces/room';
import { RoomService } from '../../../services/room.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css'],
  providers: [RoomService]
})
export class ListRoomComponent implements OnInit {

  @Input() pageId!: number;
  rooms!: Room[];
  id!: number;
  searchedItems!: Room[];
  // inputName!: string;
  // inputCity!: string;
  // inputCountry!: string;
  nameSearch: string = '';
  citySearch: string = '';
  countrySearch: string = '';
  priceSearch!: number;
  

  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit() {
    this.roomService.getListRoom().subscribe((res: Room[]) => {
      this.rooms = res; 
     
    })
    
  }

    // Methode qui permet de faire la recherche par nom de restaurant
    // searchRoom(){
    //   this.searchedItems = [];
    //   if(this.inputName != "" && this.inputCountry != "" && this.inputCity!=""){
    //         this.rooms.forEach(element => {
    //             if(element.name.toUpperCase().indexOf(this.inputName.toUpperCase())>=0 && element.country.toUpperCase().indexOf(this.inputCountry.toUpperCase())>=0 && element.city.toUpperCase().indexOf(this.inputCity.toUpperCase())>=0 ) {
    //               this.searchedItems.push(element);
    //               this.rooms=this.searchedItems
    //            }
    //         });
    //         console.log(this.rooms)
    //   }else{
    //      this.searchedItems = this.rooms;
    //   }
    // }
}
