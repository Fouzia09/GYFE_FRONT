import { Component, OnInit, Input } from '@angular/core';
import { Room } from 'src/app/interfaces/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [RoomService]
})
export class FilterComponent implements OnInit {

  rooms!: Room[];
  term!: '';
  searchedItems!: Room[];
  inputName: string = '';

 @Input() page!: string;
 //Cette variable va contenir les informations du restaurant ou de l'Hôtel
 @Input() data!: any;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
      this.roomService.getListRoom().subscribe((data: Room[]) => {
        this.rooms = data;

      })
  }



}
