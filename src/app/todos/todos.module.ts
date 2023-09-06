import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TodosService } from './services/todos.service';

const routes: Routes = [{ path: '', component: TodosComponent }];

@NgModule({
  declarations: [TodosComponent, HeaderComponent],
  // exports: [TodosComponent],
  providers: [TodosService],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TodosModule {}
