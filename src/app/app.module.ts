/**
 * 根模块
 * 负责启动应用
 * 模块之间是独立的，封闭的
 * 模块之间的引用通过导入和导出来完成
 * 模块中包含的内容：组件，服务，指令；这些内容必须在模块中配置后才有效
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ChildComponent } from './child/child.component';
import { TodosModule } from './todos/todos.module'
/**
 * 装饰器（函数）
 * 用来修饰后面的AppModule
 * 装饰器又叫注解
 * @NgModule是Angular提供的装饰器
 * 用来告诉Angular将这个类当作模块来处理
 * 语法：@NgModule({元数据对象})
 */
@NgModule({
  //该模块所拥有的组件
  declarations: [
    AppComponent,
    ChildComponent
  ],
  //该模块所依赖的其他模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    TodosModule
  ],
  //该模块所拥有的服务提供商，如果创建了一个服务，并且使用它，那么就在这里写明
  providers: [],
  //指定根组件，只有根模块需要该配置项，Angular创建它并插入index.html宿主页面
  bootstrap: [AppComponent]
  //exports //公开该模块其中的一部分，以便外部模块使用它们
})
export class AppModule { }
