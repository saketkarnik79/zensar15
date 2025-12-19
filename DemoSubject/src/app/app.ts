import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list-component/todo-list-component';
import { TodoAddComponent } from './todo-add-component/todo-add-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoAddComponent, TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DemoSubject');
}
