import { Component } from '@angular/core';
import { iUser } from '../../models/i-user';
import { AuthService } from '../auth/auth.service';
import { iFavorites } from '../../models/i-preferiti';

import { MoviesService } from '../../service/movies.service';
import { FavouriteService } from '../../service/favourite.service';
import { iMovies } from '../../models/i-movies';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.scss',
})
export class UtenteComponent {
  user!: iUser;
  favourite: iFavorites[] = [];
  userId!: number;
  constructor(
    private authSvc: AuthService,
    private moviesvc: MoviesService,
    private favouritsvc: FavouriteService,
    private movieSvc: MoviesService
  ) {}

  ngOnInit() {
    this.authSvc.user$.subscribe((user) => {
      if (user) this.user = user;
    });

    const accData = this.authSvc.getAccessData();
    if (!accData) return;
    this.userId = accData.user.id;
    this.favouritsvc.getFavouriteByUserId(this.userId)?.subscribe((f) => {
      this.favourite = f;
      console.log(this.favourite, this.userId);
    });
  }
}
