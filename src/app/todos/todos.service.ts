import { Injectable } from '@angular/core';
import { Todo } from '../todos/todo';
/**
 * 注册服务提供商的三种方式
 * 1.通过@Injectable 的providedIn:'root' 注册为根级提供商
 * 2.通过@NgModule 的providers:[]注册为模块内可用的提供商（包括上层模块）
 * 3.通过@Component 的providers:[]注册为组件的提供商（包括子组件）
 */



//装饰器，装饰TodosService为一个服务
// @Injectable({
//   //提供商
//   providedIn: 'root'
// })
@Injectable()
export class TodosService {

  constructor() { }

  todos:Todo[] = []

  todoTest(){
    console.log('TodosService') ; 
  }

  getTodos():Todo[]{
    this.todos = [
      { id: 1, name: '吃饭', done: false },
      { id: 2, name: '睡觉', done: true },
      { id: 3, name: '学习', done: false },
    ];
    return this.todos;
  }

  add(todoName:string){
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

  change(id: number){
    let todo = this.todos.find(todo => todo.id === id);
    todo.done = !todo.done;
  }

  del(id: number){
    //这样会改变this.todos的指向
    // this.todos = this.todos.filter(todo => todo.id !== id);
    let index = this.todos.findIndex(item => item.id === id)
    
    this.todos.splice(index,1);
    
  }

}
