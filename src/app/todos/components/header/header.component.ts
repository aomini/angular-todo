import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  text: string = '';
  // todoService = new TodosService();

  constructor(private todoService: TodosService) {
    this.todoService.todos$.subscribe((v) => {
      console.log(v, 'from header');
    });
  }

  changeText(e: Event) {
    const target = e.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    this.todoService.addTodo(this.text);
  }
}
