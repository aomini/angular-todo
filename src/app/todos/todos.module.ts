import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: TodosComponent }];

@NgModule({
  declarations: [TodosComponent],
  // exports: [TodosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TodosModule {}
