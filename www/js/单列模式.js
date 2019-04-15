/**
 * 也叫单体模式，核心思想是确保一个类只对应一个实例。
 * 定义一个静态的构造方法（利用闭包返回一个实列），每次调用都是看当前有没有这个实列，有即返回，没有就创建实列返回；
 * 确保只有一个实列；命名空间的使用；
 * 每次调用构造函数时，返回指向同一个对象的指针。 也就是说，我们只在第一次调用构造函数时创建新对象，之后调用返回时返回该对象即可。
 */ 

    var jQuery = (function () {
        //基础睡醒的命名
        var name = '闭包的名字'; 
        //构造函数 == 静态处理
        function Foo(params){
            this.name = params.name;
            this.xing = name;
            this.init() //内部执行一些初始化
        }
        // 扩展原型上的属性与方法
        Foo.prototype.init = function(){
            console.log(this.xing)
            this.jinneg = '直立行走'
        }
        //要返回的实列对象
        var foo = null;

        return function getFoo(params){
            
            if(foo) return foo;
            
            else{
                foo =  new Foo(params);
                return foo;
            }
        }
    })()
    let obj1 = jQuery({name:'苏镇-单列模式'});
    let obj2 = jQuery({name:'苏镇-单列模式'});

    console.log('单列设计模式',obj1===obj2,obj1)
