import { Component } from '@angular/core';
import { fail } from 'assert';
/**
 * 组件装饰器
 */
@Component({
  //选择器（组件名称），对应HTML中的组件名称
  selector: 'app-root',
  //内联模版
  //演示差值表达式
  // template: '<div>{{ title }}-----{{fn()}}</div>',
  //演示属性绑定
  // template: `
  //   <a [href]="url">a链接</a>
  //   <input type="checkbox" [checked]="isChecked"/>
  //   <button (click)="btnClick()">点击</button>
  //   <input type="text" [(ngModel)]="msg"/>
  //   {{ msg }}

  // `,
  //指定组件模版url
  templateUrl: './app.component.html',
  //指定组件样式
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * angular数据绑定的四种方式：
   * 1.差值表达式
   * 2.属性绑定
   * 3.事件绑定
   * 4.双向数据绑定
   */
  title = 'my-first-ng-project';
  url = 'http://baidu.com/';
  isChecked = true;
  msg = '双向数据绑定数据'
  fn() {
    return '这是方法返回的数据';
  };
  //处理事件点击
  btnClick() {

    console.info('点击了');
  };
  fetchColors() {
    console.log(11111);
    this.colors1 = [
      { id: 1, name: 'red' },
      { id: 2, name: 'green22222' },
      { id: 3, name: 'blue' },
      { id: 4, name: 'yellow' },
      { id: 5, name: 'pink55555' },
    ]
  };

  trackByID(index: number, color) {
    return color.id
  };

  

  classList = {
    reColor: true,
  };
  test = true;
  show = false;
  colors = ['red', 'green', 'blue', 'yellow', 'pink'];
  colors1 = [
    { id: 1, name: 'red' },
    { id: 2, name: 'green' },
    { id: 3, name: 'blue' },
    { id: 4, name: 'yellow' },
    { id: 5, name: 'pink' },
  ];
  
}
