### 数据类型

>- 原始类型

string、number、boolean、null、undefined、object、es6的symble

>- 声明不同类型的参数
```javascript
	// 声明格式 变量名：变量类型 = 变量值

	// A.声明原始类型;
	let str: string = '我是字符串';
	let num: number = 2019;
	let falg: boolean = true;
	let obj: object = {name: 'ts',age: 34}

	// B.声明void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
	let v: void = undefined;

	// c. 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
	let n: nudefied = undefined;
	let nu: null = null;
	let num_n: number = undefined;

	// d.声明任意类型的变量 any 类型，则允许被赋值为任意类型;也可以访问变量下面未定义的方法或属性
	let str: any = 'string';
	let num: any = 12;
	let obj: any = {name:'ts2',age: 18}
	let anyThing: any = 'hello'; 
	console.log(anyThing.myName);
	console.log(anyThing.myName.firstName);

	// e.变量如果在声明的时候，未指定其类型(也未赋值)，那么它会被识别为任意值类型，拥有任意类型的所有特性;
	let person;
	person = {name:'复仇7'};

	// f.类型推论
	// 于e的声明比较，e不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
	let str_1 = '我以后就不能再次被赋值其他类型的值了'; // 等价于 let str_1: string = '我以后就不能再次被赋值其他类型的值了'

	// g.联合类型    => 联合类型（Union Types）表示取值可以为多种类型中的一种; 格式：联合类型使用 | 分隔每个类型。
	let s_n : string | numer;
		s_n = '我是联合类型中被允许的字符串类型';
		s_n = 12;

	// h.接口的定义；面向对象语言中，接口（Interfaces）是对行为的抽象，而具体如何行动需要由类（classes）去实现（implements）; 
	Interfaces Idog = {
		readonly name: string; //只读属性，
		age: number;
		[too: number] : number; // 只要 index 的类型是 number，那么值的类型必须是 number。
		gender ?: string ; // ? 非必实现的属性
		[propName: string]: any ;// 任意属性 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：(必须包含其他属性类型)
		// [propName: string]: string; // 会报错，age是number类型，不是string的子集


	};
	let dg: Idog = {name: "莱利"，age: 56, wai: '外号'};// 实现的时候 =>赋值的时候，属性的类型必须和接口的类型保持一致，必要的属性必须不能少也不能多；
		dg.wai = '新外号' // 实现后也可以进行获取赋值;
		// dg.name = '黑莱利'； 报错，这是可读属性只能在实现接口时赋值，其他地方在赋值就报错

	// i.数组的声明
	let num_arr : number[] = [2,4,5]; // 类型 + 方括号 
	let num_arr_1 : Array<number> = [3,5,6]; // 泛型的命名 
	let ste_arr : string[] = ['ni','shi','字符串数组'];
	let arr: any[] = [{},1,'33',[]]; // 任意类型的数组

	// j.函数的类型
	function sum(x: number, y: number): number { // 声明式；有返回值的要确定返回值的类型 无返回值的void
		return x + y;
	}
	//  1.调用时参数不能多也不能少
	let mySum = function (x: number, y: number, z?:string, h:string = '默认参数'): number { // 函数表达式；
		// 2.?可选参数;可选参数后面不允许再出现必须参数了；
		// 3.默认值的参数识别为可选参数，此时不受「可选参数必须接在必需参数后面」的限制；
		return x + y;
	};
	function push(array: any[], ...items: any[]) {
		// 4. rest 参数只能是最后一个参数； ...迭代数组
		items.forEach(function(item) {
			array.push(item);
		});
	}
	let a = [];
	push(a, 1, 2, 3);

	// k.类型断言 格式：<sting> 变量名 ；可用与判断使用该类型的一些属性或特性；

	// l.类型别名与字符串字面量类型都是使用 type 进行定义。
	type str = '1' | '壹' | '一';
	// 使用str时只能是咱这中的一个;

	// j.枚举类型
	// 枚举（Enum）类型用于取值被限定在一定范围内的场景,比如一周只能有七天
	enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
	// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射;当然我们也可以我们也可以给枚举项手动赋任何值
	// console.log(Days["Sun"] === 0); // true
	// console.log(Days[3] === "Wed"); // true

```
使用注意事项以及总结

```javascript
	// 1.联合类型在函数中使用；点：在不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
	function getString(something: string | number): string {
		return something.toString();
		// return something.length  会报错，number没有长度
	}

```


public subject : Subject<{ showAside? : boolean, showHeader? : boolean }> = new Subject();
constructor (private render : Renderer2){}

/**
 * 菜单数据
 */
export class ITree {
	// ID
	id : string | number;

	// 父ID
	parentId : string | number;

	// 名称
	name : string;

	// 子节点
	children? : ITree[];
}