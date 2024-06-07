import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iFavorites } from '../models/i-preferiti';
import { AuthService } from '../pages/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  userId!: number;

  favouritesArr = environment.favoutitsUrl;

  constructor(private http: HttpClient, private authsvc: AuthService) {}

  getAll() {
    return this.http.get<iFavorites[]>(this.favouritesArr);
  }

  getById(id: number) {
    return this.http.get<iFavorites>(`${this.favouritesArr}/${id}`);
  }

  getFavouriteByUserId(userId: number) {
    return this.http.get<iFavorites[]>(
      `${this.favouritesArr}?userId=${userId}`
    );
  }

  create(newpref: Partial<iFavorites>) {
    return this.http.post<iFavorites>(this.favouritesArr, newpref);
  }

  delete(id: number) {
    return this.http.delete(`${this.favouritesArr}/${id}`);
  }
}
