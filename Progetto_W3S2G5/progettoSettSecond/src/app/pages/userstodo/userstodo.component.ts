import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { iUser } from '../../models/i-users';


@Component({
  selector: 'app-userstodo',
  templateUrl: './userstodo.component.html',
  styleUrl: './userstodo.component.scss',
})
export class UserstodoComponent {
  users: iUser[] = [];

  constructor(private todoService: TodoService) {
    this.todoService.getUserPosts();
    this.users = this.todoService.usersPosts;

  }

}
