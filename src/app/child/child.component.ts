import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

/**
 *需要实现OnInit接口
 *   
 * */
export class ChildComponent implements OnInit {

  constructor() { }

  //提供接收外部数据的入口，相当于vue的props
  @Input()
  skill:string

  @Output()
  getMoney = new EventEmitter()

  handleClick(){
    this.getMoney.emit('子组件的数据');
  }

  ngOnInit() {
  }

}
