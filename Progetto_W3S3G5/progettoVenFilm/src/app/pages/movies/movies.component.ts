import { iMovies } from './../../models/i-movies';
import { Component } from '@angular/core';

import { iUser } from '../../models/i-user';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  movies: iMovies[] = [];
  user: iUser | undefined;
  favourite: boolean = false;
  constructor(private movieSvc: MoviesService) {}

  ngOnInit() {
    this.movieSvc.getAllMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  addFavourite(movie: iMovies) {
    this.movieSvc.addFavourite(movie);
    this.favourite = !this.favourite;
  }
}
