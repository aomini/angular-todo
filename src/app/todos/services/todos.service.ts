import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todos } from '../types/todos';

@Injectable()
export class TodosService {
  todos$ = new BehaviorSubject<Todos[]>([]);

  constructor() {
    console.log('Called');
  }

  addTodo(text: string): void {
    const newTodo: Todos = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };
    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);
  }
}
