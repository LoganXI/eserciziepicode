import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iUser } from '../models/i-user';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl = environment.usersUrl;

  users: iUser[] = [];

  userSubj = new BehaviorSubject<iUser[]>([]);

  $users = this.userSubj.asObservable();

  constructor(private http: HttpClient) {
    this.getAllUsers().subscribe((data) => {
      this.userSubj.next(data);
      this.users = data;
    });
  }

  getAllUsers() {
    return this.http.get<iUser[]>(this.userUrl);
  }
}
