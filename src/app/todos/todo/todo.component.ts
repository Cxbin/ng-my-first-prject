import { Component, OnInit } from '@angular/core';

import { TodosService } from '../todos.service';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  //在组件中注册服务提供商，在本组件和子组件中可以使用
  providers: [TodosService],
})
export class TodoComponent implements OnInit {
  //告诉组件，组件中需要用到这个服务，经过了这样一个依赖注入，这样这个服务就交给Angular来管理了，每个服务在程序中都是一个单例对象
  constructor(private todoService: TodosService) { }

  ngOnInit() {
  }

  todos: Todo[] = this.todoService.getTodos();

  exchangeDoneFlag(id: number) {
    this.todoService.change(id);
  };
  delTodo(id: number) {
    this.todoService.del(id);
  };

  addTodo(todoName: string) {
    this.todoService.add(todoName); 
  }

}
