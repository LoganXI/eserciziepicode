import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';
import { iUser } from '../../models/i-user';
import { UserService } from '../../service/user.service';
import { MoviesService } from '../../service/movies.service';
import { FavouriteService } from '../../service/favourite.service';
import { iFavorites } from '../../models/i-preferiti';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: iUser[] = [];
  favourite: iFavorites[] = [];
  userId!: number;

  constructor(private usersSvc: UserService) {}

  ngOnInit(): void {
    this.usersSvc.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }
}
