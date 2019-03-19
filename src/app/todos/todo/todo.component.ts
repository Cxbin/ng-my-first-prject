import { Component, OnInit } from '@angular/core';

import { TodosService } from '../todos.service';
//接口
interface Todo {
  id: number,
  name: string,
  done: boolean
}

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

  todos: Todo[] = [
    { id: 1, name: '吃饭', done: false },
    { id: 2, name: '睡觉', done: true },
    { id: 3, name: '学习', done: false },
  ];

  exchangeDoneFlag(id: number) {
    console.log('11111' + id);
    let todo = this.todos.find(todo => todo.id === id);
    todo.done = !todo.done;
  };
  delTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  };

  addTodo(todoName: string) {

    //调用服务
    this.todoService.todoTest();

    let id = 0;

    if (this.todos.length > 0) {
      id = this.todos[this.todos.length - 1].id + 1;
    }

    let todo: Todo = {
      id: id,
      name: todoName,
      done: false
    }

    this.todos.push(todo);
  }



}
