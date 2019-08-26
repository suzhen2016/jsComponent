## ngModule 的解释
Angular的模块的目的是用来组织app的逻辑结构。
angular进将逻辑（功能）进行封装成模块，进行高内聚  低耦合的功能;各个模块都是平级的没有主子之分;
作用：NgModule可以管理模块内部的Components、Directives、Pipes，引入Service，并控制外部组件对内部成员的访问权限。
问题：启动模块为根模块，自定义的其他模块叫特性模块；特性模块，不能通过imports 导入根模块，造成循环引用报错；
>- 代码模板展示
```javascript
    // 模板    custor.module.ts
    // import {  } from '';   格式 import {}(导入模块) from '相对路径';
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { RouterModule } from '@angular/router';
    
    @NgModule({
        declarations : [],
        imports : [
            CommonModule,
            RouterModule.forChild([{ //组件导航定义
                path : '',
                component : CustomerListComponent
            }])
        ],
        providers,
        exports : [],
        bootstrap : [],
        entryComponents : []
    })

    export class CustorModule {}

```

>- 1.declarations：模块内部Components/Directives/Pipes的列表，声明一下这个模块内部成员;

>- 2.providers：指定应用程序的根级别需要使用的service。（Angular2中没有模块级别的service，所有在NgModule中声明的Provider都是注册在根级别的Dependency Injector中）

>- 3.imports：导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用 。
    
    比如导入CommonModule后就可以使用NgIf、NgFor等指令。

>- 4.exports：用来控制将哪些内部成员暴露给外部使用。导入一个module并不意味着会自动导入这个module内部导入的module所暴露出的公共成员。

    控制这个module内部公共成员通过exports属性到给引入的组件使用。

>- 5.bootstrap：通常是app启动的根组件，一般只有一个component。bootstrap中的组件会自动被放入到entryComponents中。

>- 6.entryCompoenents: 不会再模板中被引用到的组件。这个属性一般情况下只有ng自己使用，一般是bootstrap组件或者路由组件，ng会自动把bootstrap、路由组件放入其中。


>- 定义文件模块的规则

1.每个模块一个单独的文件夹

2.模块是高内聚 低耦合

3.模块内功能相关或相近

4.每个模块都有单独的路由定义 -不是必须

5.不要重复导入一些模块，必要的时候加入限制。 因为重复导入可能会影响依赖注入实例