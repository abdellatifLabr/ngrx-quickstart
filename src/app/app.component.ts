import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTodo, RemoveTodo } from './store/actions/todo.actions';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="onAddTodo()">Add Todo</button>
    <button (click)="onRemoveTodo()">Remove Todo</button>
    <ul>
      <li *ngFor="let todo of todos$ | async">{{ todo }}</li>
    </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  todos$: Observable<any[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.todos$ = this.store.select('todos');
  }
  
  onAddTodo() {
    let todoItem = 'some data';
    this.store.dispatch(new AddTodo(todoItem));
  }

  onRemoveTodo() {
    this.store.dispatch(new RemoveTodo(''));
  }
}
