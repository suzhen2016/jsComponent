/**
 * 传统构造函数模式
 * 概念：通过new 创建子类，所有的子类共享构造方法内的属性与方法;
 * 原理：
 * 优点：明确子对象的类型
 * 缺点：共享的方法每次实列占内存（原型解决）
 * 使用场景：
 * 应用实列：
 */

    //
    function Person(params) {
        this.name = params.name;
        this.age = params.age;
        this.say = function(){  //可以改到原型上去继承，节约内存分配
              console.log('我是构造函数模式的子类==>',this.name)
        }
    }
    let p1 = new Person({name:'苏镇',age:18})
    p1.say()
    let p2 = new Person({name:'苏氏之道',age:19})
    p2.say()
    console.log('构造函数模式',p1,p2)