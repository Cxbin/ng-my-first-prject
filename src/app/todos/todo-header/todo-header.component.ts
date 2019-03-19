import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output()
  add = new EventEmitter<string>()

  newTodoMsg = '';

  addTodo() {
    if (this.newTodoMsg.length == 0) {
      return;
    }
    
    this.add.emit(this.newTodoMsg)

    this.newTodoMsg = '';
    
  }

}
