import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NewFavorite, UpdateFavorite, FavoriteOUT } from '../../../interfaces/favorite';
import { FavoriteService } from '../../../services/favorite.service';
import { UserService } from '../../../services/user.service';

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

  constructor(
    private favoriteService: FavoriteService,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    ) {
    this.user = localStorage.getItem('userString') as string;
  }

  ngOnInit(): void {
    this.getFav();
  }

  getFav(): void {
    this.favoriteService.getFavoriteByItemUrl(this.itemUrl).subscribe(
      data => {
        if (data.status !== 404) {
          this.favorite = data;
          const userFounded = this.favorite.users.find(user => user == this.user);
          this.isFavorite = userFounded != null;
        }
        else {
          this.isFavorite = false;
        }
      },
      error => { console.log(error); });
  }

  addFav(): void {
    if (this.favorite == null) {
      const fav: NewFavorite = {
        itemName: this.item.name,
        itemUrl: `/${this.itemUrl.split('_').join('/')}`,
        itemImage: this.item.image1,
        users : [this.user]
      };

      this.favoriteService.addFavorite(fav).subscribe(
        () => {
          this.updateUserInfoInLocalStorage();
        }, error => { console.log(error); });
    }
    else {
      this.favorite.users.push(this.user)
      const fav: UpdateFavorite = {
        users: this.favorite.users
      }

      this.favoriteService.updateFavorite(this.favorite.id, fav).subscribe(
        () => { this.updateUserInfoInLocalStorage(); },
        error => { console.log(error); });
    }
  }

  removeFav(): void {
    this.favorite.users = this.favorite.users.filter(user => user !== this.user);

    if (this.favorite.users.length < 1) {
      this.favoriteService.deleteFavorite(this.favorite.id).subscribe(
        () => { this.updateUserInfoInLocalStorage(); }, error => { console.log(error); });
    }
    else {
      const fav: UpdateFavorite = {
        users: this.favorite.users
      }
      this.favoriteService.updateFavorite(this.favorite.id, fav).subscribe(
        () => { this.updateUserInfoInLocalStorage(); }, error => { console.log(error); });
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
