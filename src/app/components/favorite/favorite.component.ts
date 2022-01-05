import { Component, OnInit } from '@angular/core';
import { FavoriteOUT } from 'src/app/interfaces/favorite';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favorites!: FavoriteOUT[];
  loading!: boolean;

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.getFavorites(1);
  }

  getFavorites(userId: number): void {
    this.loading = true;
    this.favoriteService.getFavByUser(userId).subscribe(
      (favorites) => {
        this.favorites = favorites;
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

}
