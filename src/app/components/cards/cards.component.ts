import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/interfaces/room';
import { RoomService } from 'src/app/services/room.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  
  
})
export class CardsComponent implements OnInit {

  
  constructor(private roomService: RoomService) {}

  ngOnInit() {
    
  }
  
}
