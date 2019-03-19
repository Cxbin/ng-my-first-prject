import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodosService } from './todos.service'
@NgModule({
  declarations: [TodoComponent, TodoHeaderComponent, TodoListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  //如果需要在其他模块中使用本模块的组件，则需要导出本模块的组件
  exports: [TodoComponent],
  //在模块中注册服务提供商,在本模块中可以使用，以及在引用本模块的模块可以使用
  // providers: [TodosService],

})
export class TodosModule { }
