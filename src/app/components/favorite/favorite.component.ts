import { Component, Input, OnInit } from '@angular/core';
import { FavoriteOUTFromUserOUT } from 'src/app/interfaces/favorite';
import { FavoriteService } from 'src/app/services/favorite.service';
import { UserService } from 'src/app/services/user.service';
import { UserOUT } from '../../interfaces/user';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favorites!: FavoriteOUTFromUserOUT[];

  constructor() { }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(): void {
    let userLoggedInfo: UserOUT | string;
    userLoggedInfo = localStorage.getItem('userLoggedInfo') as string;
    userLoggedInfo = JSON.parse(userLoggedInfo) as UserOUT;
    this.favorites = userLoggedInfo.favorites as FavoriteOUTFromUserOUT[];
  }

}
