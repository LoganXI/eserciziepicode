import { Component } from '@angular/core';
import { iTodo } from '../../models/i-todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {
  todos: iTodo[] = []

  constructor(
    private todoService: TodoService
  ) {
    this.todos = this.todoService.todoAuthor
    this.todos = this.getCompletedTodos()
  }


  getCompletedTodos() {
    return this.todos.filter(todo => todo.completed)
  }
}
