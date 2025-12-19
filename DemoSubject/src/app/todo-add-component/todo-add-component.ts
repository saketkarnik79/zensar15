import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule  } from '@angular/common';

import { Todo, TodoService} from '../todo-service';

@Component({
  selector: 'app-todo-add-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todo-add-component.html',
  styleUrl: './todo-add-component.css',
})
export class TodoAddComponent implements OnInit {
  todos$?: Observable<Todo[]>;
  todoForm: FormGroup;

  constructor(private todoService: TodoService, private formBuilder: FormBuilder) { 
    this.todoForm=this.formBuilder.group({
      id: [''],
      value: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.todos$ = this.todoService.todos$;
  }

  onSubmit(){
    this.todoService.create(this.todoForm?.value);
    this.todoForm?.get('value')?.setValue('');
  }
}
