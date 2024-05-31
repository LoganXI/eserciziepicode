import { Component } from '@angular/core';
import { iTodo } from '../../models/i-todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  todos: iTodo[] = []

  constructor(
    private todoService: TodoService
  ) {
    this.todos = this.todoService.todoAuthor
  }
}
