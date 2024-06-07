import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iMovies } from '../models/i-movies';

import { HttpClient } from '@angular/common/http';
import { AuthService } from '../pages/auth/auth.service';
import { FavouriteService } from './favourite.service';
import { iFavorites } from '../models/i-preferiti';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviesUrl = environment.moviesUrl;
  movies: iMovies[] = [];
  userid!: number;
  favouritemovieSId!: iFavorites;
  favouriteMovies: iFavorites[] = [];

  constructor(
    private http: HttpClient,
    private authsvc: AuthService,
    private favouritesvc: FavouriteService
  ) {}

  getAllMovies() {
    return this.http.get<iMovies[]>(this.moviesUrl);
  }

  getById(id: number) {
    return this.http.get<iMovies>(`${this.moviesUrl}/${id}`);
  }

  addFavourite(movie: iMovies) {
    const accData = this.authsvc.getAccessData();
    if (!accData) return;
    this.userid = accData.user.id;
    const favouriteM: Partial<iFavorites> = {
      userId: this.userid,
      movie: movie,
    };
    const sFavourite: iFavorites | undefined = this.favouriteMovies.find(
      (f) => f.movie.id === movie.id
    );
    if (sFavourite === undefined) {
      this.favouritesvc.create(favouriteM).subscribe((f) => {
        this.favouritemovieSId = f;
        this.favouriteMovies.push(this.favouritemovieSId);
      });
    } else {
      let serchD: number = this.favouriteMovies.findIndex(
        (f) => f.id === this.favouritemovieSId.id
      );
      if (serchD !== -1) {
        this.favouriteMovies.splice(serchD, 1);
      }
      this.favouritesvc.delete(this.favouritemovieSId.id).subscribe({});
    }
  }
}
