import { Injectable } from '@angular/core';

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

  todoTest(){
    console.log('TodosService') ; 
  }
}
