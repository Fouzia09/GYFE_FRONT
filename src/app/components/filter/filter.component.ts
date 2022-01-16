import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from 'src/app/interfaces/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [RoomService]
})
export class FilterComponent implements OnInit {

  filterCountry!: string;
  filterCity!: string;
  filterPrice!: number;
  rooms!: Room[];
  allRooms!: Room[];
 searchTerm !: string;
 

  constructor(private roomService: RoomService) { }
  ngOnInit(): void {
      this.roomService.getListRoom().subscribe((data: Room[]) => {
        this.rooms = data; 
        this.allRooms = this.rooms;
        console.log(data)
      })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.roomService.search.next(this.searchTerm);
  }

}
