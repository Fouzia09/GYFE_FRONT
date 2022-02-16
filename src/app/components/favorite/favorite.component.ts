import { Component, OnInit } from '@angular/core';
import { UpdateFavorite } from 'src/app/interfaces/favorite';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { UserOUT } from '../../interfaces/user';
import { FavoriteOUT } from '../../interfaces/favorite';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favorites!: FavoriteOUT[];
  user: string;

  constructor(
    private favoriteService: FavoriteService,
    private userService: UserService,
    private authenticationService: AuthenticationService
    ) { 
    this.user = localStorage.getItem('userString') as string;
  }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(): void {
    let userLoggedInfo: UserOUT | string;
    userLoggedInfo = localStorage.getItem('userLoggedInfo') as string;
    userLoggedInfo = JSON.parse(userLoggedInfo) as UserOUT;
    this.favorites = userLoggedInfo.favorites as FavoriteOUT[];
  }

  removeFav(favorite: FavoriteOUT): void {
    favorite.users = favorite.users.filter(user => user !== this.user);

    if (favorite.users.length < 1) {
      this.favoriteService.deleteFavorite(favorite.id).subscribe(
        () => { this.updateUserInfoInLocalStorage(); },
        error => { console.log(error); });
    }
    else {
      const fav: UpdateFavorite = {
        users: favorite.users
      }
      this.favoriteService.updateFavorite(favorite.id, fav).subscribe(
        () => { this.updateUserInfoInLocalStorage(); },
        error => { console.log(error); });
    }
  }

  updateUserInfoInLocalStorage(): void {
    this.userService.getUserByUsername(this.authenticationService.userLoggedUsername()).subscribe(
      userLoggedInfo => {
        this.authenticationService.setInLocalStorage('userLoggedInfo', JSON.stringify(userLoggedInfo));
        this.ngOnInit();
      });
  }
}
