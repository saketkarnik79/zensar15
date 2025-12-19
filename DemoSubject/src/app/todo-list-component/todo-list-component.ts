import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo, TodoService } from '../todo-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list-component',
  imports: [CommonModule],
  templateUrl: './todo-list-component.html',
  styleUrl: './todo-list-component.css',
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]> =new Observable<Todo[]>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.todoService.todos$;
  }

  deleteTodo(todoId: number){
    this.todoService.remove(todoId);
  }
}
