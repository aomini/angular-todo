import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TodosService } from './services/todos.service';
import { MainComponent } from './components/main/main.component';
import { TodoComponent } from './components/todo/todo.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [{ path: '', component: TodosComponent }];

@NgModule({
  declarations: [TodosComponent, HeaderComponent, MainComponent, TodoComponent, FooterComponent],
  // exports: [TodosComponent],
  providers: [TodosService],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TodosModule {}
