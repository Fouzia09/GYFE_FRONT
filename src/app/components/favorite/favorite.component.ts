import { Component, Input, OnInit } from '@angular/core';
import { FavoriteOUTFromUserOUT } from 'src/app/interfaces/favorite';
import { FavoriteService } from 'src/app/services/favorite.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() username!: string;
  favorites!: FavoriteOUTFromUserOUT[];
  loading!: boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getFavorites(this.username);
  }

  getFavorites(username: string): void {
    this.loading = true;
    this.userService.getUserByUsername(username).subscribe(
      userLoggedInfo => {
        this.favorites = userLoggedInfo.favorites!;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

}
