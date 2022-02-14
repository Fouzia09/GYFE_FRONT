import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { FavoriteOUTFromUserOUT, NewFavorite, UpdateFavorite, FavoriteOUT } from '../../../interfaces/favorite';
import { FavoriteService } from '../../../services/favorite.service';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.css']
})
export class AddFavoriteComponent implements OnInit {
  @Input() item: any;
  @Input() itemUrl!: string;
  user: string;
  favorite!: FavoriteOUT;
  isFavorite!: boolean;

  constructor(private favoriteService: FavoriteService) {
    this.user = localStorage.getItem('userString') as string;
  }

  ngOnInit(): void {
    this.getFav();
  }

  getFav(): void {
    this.favoriteService.getFavoriteByItemUrl(this.itemUrl).subscribe(
      data => {
        this.favorite = data;
        const userFounded = this.favorite.users.find(user => user == this.user);
        this.isFavorite = userFounded != null;
      },
      error => {
        console.log(error);
      });
  }

  addFav(): void {
    if (this.favorite == null) {
      const fav: NewFavorite = {
        itemName: this.item.name,
        itemUrl: this.itemUrl,
        itemImage: this.item.image1,
        users : [this.user]
      }

      this.favoriteService.addFavorite(fav).subscribe(
        data => {
          const userFounded = data.users.find(user => user == this.user);
          this.isFavorite = userFounded != null;
        },
        error => {
          console.log(error);
        });
    }
    else {
      this.favorite.users.push(this.user)
      const fav: UpdateFavorite = {
        users: this.favorite.users
      }

      this.favoriteService.updateFavorite(this.favorite.id, fav).subscribe(
        data => {
          const userFounded = data.users.find(user => user == this.user);
          this.isFavorite = userFounded != null;
        },
        error => {
          console.log(error);
        });
    }
  }
}
