import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todos } from '../types/todos';
import { FilterEnum } from '../types/filter.enum';

@Injectable()
export class TodosService {
  todos$ = new BehaviorSubject<Todos[]>([]);
  filterTodos$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);

  constructor() {}

  addTodo(text: string): void {
    const newTodo: Todos = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };
    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);
  }

  toggleAll(checked: boolean): void {
    const updatedTodos = this.todos$.getValue().map((todo) => ({
      ...todo,
      isCompleted: checked,
    }));
    this.todos$.next(updatedTodos);
  }
}
