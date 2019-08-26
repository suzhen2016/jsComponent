## Subject的事件流通知

```javascript
import { Subject } from 'rxjs';
@Injectable({
	providedIn : 'root'
})
export class Demo {
    public subject : Subject<{ isLogin? : boolean }> = new Subject();
    constructor () {}
    this.subject.next({ isLogin : true });
    // 此处变化就会通知其他观察者;
}

// 其他模块组件使用
this.Demo.subject.subscribe(({ isLogin }) => {
    console.log(isLogin) // true          
});
```