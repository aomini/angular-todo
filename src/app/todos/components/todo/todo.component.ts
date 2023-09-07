import { Component, Input } from '@angular/core';
import { Todos } from '../../types/todos';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input('todo') todoProps: Todos;
}
