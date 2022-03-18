import { Restaurant } from './../../interfaces/restaurant';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-restaurant',
  templateUrl: './filter-restaurant.component.html',
  styleUrls: ['./filter-restaurant.component.css'],
  providers: [RestaurantService]
})
export class FilterRestaurantComponent implements OnInit {

  restaurants!: Restaurant[];
  term!: '';
  searchedItems!: Restaurant[];
  inputName: string = '';

 @Input() page!: string;
 //Cette variable va contenir les informations du restaurant ou de l'Hôtel
 @Input() data!: any;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
      this.restaurantService.getRestaurants().subscribe(
        data=>{
          this.restaurants = data;
        }
      )
  }
}
