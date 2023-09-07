import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Todos } from '../../types/todos';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnChanges {
  @Input('todo') todoProps: Todos;
  @Input('isEditing') isEditingProps: boolean;
  @Output('setEditingId') setEditingIdEvent: EventEmitter<string | null> =
    new EventEmitter();

  editingText: string = '';
  @ViewChild('editInput') editInput: ElementRef;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.editingText = this.todoProps.text;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isEditingProps'].currentValue) {
      setTimeout(() => {
        this.editInput.nativeElement.focus();
      }, 0);
    }
  }

  setTodoEditMode() {
    this.setEditingIdEvent.emit(this.todoProps.id);
  }

  changeText(event: Event) {
    const target = event.target as HTMLInputElement;
    this.editingText = target.value;
  }

  toggleTodo() {}

  removeTodo(): void {
    this.todosService.removeTodo(this.todoProps.id);
  }

  updateText() {
    this.todosService.updateTodo(this.todoProps.id, this.editingText);
    this.setEditingIdEvent.emit(null);
  }
}
