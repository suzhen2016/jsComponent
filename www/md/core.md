## @angular/core下的服务简介

### 1.ViewChild：一个属性装饰器，用来从模板视图中获取对应的元素，可以通过模板变量获取，获取时可以通过 read 属性设置查询的条件，就是说可以把此视图转为不同的实例

### 2.ViewContainerRef ：一个视图容器，可以在此上面创建、插入、删除组件等等

### 3.ComponentFactoryResolve：一个服务，动态加载组件的核心，这个服务可以将一个组件实例呈现到另一个组件视图上

 >- 有了这三个，一个简单的思路便连贯了：特定区域就是一个视图容器，可以通过 ViewChild 来实现获取和查询，然后使用ComponentFactoryResolve将已声明未实例化的组件解析成为可以动态加载的 component，再将此component 呈现到此前的视图容器中。

 ```typescript
    // <div class="modal-body" #modalBody></div>
    @ViewChild('modalBody', { read : ViewContainerRef }) private modalBody : ViewContainerRef;
    let crm = this.resolver.resolveComponentFactory('组件a'); // resolver是在构造器里面加载的 private resolver : ComponentFactoryResolver,
    this.modalBody.createComponent(crm) // 动态加载组件时执行即可
    // 此时 modalBody就具有dom对象的属性方法
    this.modalBody.element.nativeElement.style[key] = `${ value }px`;

 ```
