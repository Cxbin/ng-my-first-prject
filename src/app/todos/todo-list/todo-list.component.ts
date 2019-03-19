import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//接口
interface Todo {
  id: number,
  name: string,
  done: boolean
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  todos:Todo[]

  @Output()
  del = new EventEmitter<number>()

  @Output()
  change = new EventEmitter<number>()

  exchangeDoneFlag(id:number) {
    // console.log(id);
    // let todo = this.todos.find(todo => todo.id === id);
    // todo.done = !todo.done;
    this.change.emit(id)
  };
  delTodo(id:number) {
    // this.todos = this.todos.filter(todo => todo.id !== id);
    this.del.emit(id)
  };

  trackByTodos(index: number, todo:Todo) {

    return todo.id;
  };

}
