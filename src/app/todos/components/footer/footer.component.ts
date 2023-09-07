import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Observable, map, filter, tap } from 'rxjs';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  noTodoClass$: Observable<boolean>;
  activeCount$: Observable<number>;
  itemsLeftText$: Observable<string>;
  filterEnum = FilterEnum;
  activeFilter = FilterEnum.all;

  constructor(private todosService: TodosService) {
    this.activeCount$ = this.todosService.todos$.pipe(
      map((todos) => todos.filter((todo) => !todo.isCompleted).length)
    );
    this.itemsLeftText$ = this.activeCount$.pipe(
      filter((count) => count > 0),
      map((count) => `item${count !== 1 ? 's' : ''} left`)
    );
    this.noTodoClass$ = this.todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    );
  }

  changeFilter(event: Event, filter: FilterEnum) {
    event.preventDefault();
    this.activeFilter = filter;
    this.todosService.changeFilter(filter);
  }
}
