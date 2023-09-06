import { Component } from '@angular/core';
import { TodosService } from './todos/services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoapp';

  constructor(private todosService: TodosService) {
    this.todosService.todos$.subscribe((v) => {
      console.log(v, 'from app');
    });
  }
}
