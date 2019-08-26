
/**
 * ES6的继承使用 extends
 * super：
 * 第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
 * 第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
 */

class Animal {
    static color  =  'red'; // 静态属性与方法被继承的类直接使用
    constructor(foot, name){
        this.foot = foot;   // 父类的实列属性在子类继承的super是访问不到的
        this.name = name;
    }

    eat () { // 实例方法,位置：Animal.prototype
        console.log(this.name + '吃' + this.foot)
    }

    static getColor () {
        console.log('静态方法获取颜色值：',this.color)
    }

}

Animal.prototype.sayHello = function () {
    console.log('Hello ！My name is' + this.name)
}
Animal.prototype.sleep = '睡觉';

// 类的原型指向与实列话对象的__proto__是一致的；也就是类的普通方法就是挂在类的原型上的
console.log('父类', Animal.prototype, new Animal('食物', '动物').__proto__ === Animal.prototype) 

/**
 * 继承实现：
 * 1.在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。
 * 2.在子类中super当做对象使用时，不能直接点语法访问父类的是实例化属性（）
 */
class Dog extends Animal {
    static color = 'block';
    constructor(foot, name){
        super(foot, name); // 子类构造方法内必须执行来继承父类的方法与属性
    }
    
    /**
     * 静态方法只能在类下调用:类.静态方法名；
     * 静态方法内的this是指向当前的类
     */
    static getColor () {
        console.log('子类的获取颜色值：', super.color);     // 父类静态属性
        super.getColor(); // super.getColor指向父类的静态方法。这个方法里面的this指向的是子类，而不是子类的实例
    }

    getLog () {
        console.log('我不能直接访问父类的实例化属性',super.color);
        console.log('子类能直接访问父类原型对象上的属性',super.sleep); // 原型上的
    }

    /**
     * 普通方法内的super方法是执行父类的原型对象上方法；
     * 方法内部的this指向当前的子类实例。
     */
    dogEat () {
        super.eat();
        // Animal.prototype.eat.apply(this);  // 父类的原型
    }

    dogSay () {
        super.sayHello();
        Dog.getColor(); // 调用静态方法
    }
}

const dog = new Dog('骨头', '杰瑞');

dog.getLog();
dog.dogEat();
dog.dogSay();

console.log('Dog的实例化：',dog)
