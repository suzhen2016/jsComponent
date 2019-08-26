/**
 * 概念：也叫单体模式，核心思想是确保一个类只对应一个实例，也就是只执行一次实列或创建，返回的永远是同一个对象。
 * 
 * 解释：定义一个静态的构造方法（利用闭包返回一个实列），每次调用都是看当前有没有这个实列，有即返回，没有就创建实列返回；
 * 确保只有一个实列；命名空间的使用；
 * 每次调用构造函数时，返回指向同一个对象的指针。 也就是说，我们只在第一次调用构造函数时创建新对象，之后调用返回时返回该对象即可。
 * 
 * 优点：目的是为了预防全局污染，全局命名冲突的问题；
 * 
 * 缺点：改变一处对象的属性，起他的都会影响
 * 
 * 场景：并且他的实现不受场景限制 vuex、jQuery
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

    let j_1 = jQuery({name:'苏镇-单列模式'});
    let j_2 = jQuery({name:'苏镇-单列模式'});

    console.log('单列设计模式',j_1===j_2)

    /**
     * 第二种实现方式
     * 原型扩展
    */
   var CreateDiv = function (html) {
        this.html = html;
        this.init();
    };

    CreateDiv.prototype.init = function () {
        console.log('第二种格式的原型扩展')
    };
    //最后暴露一个方法或实列即可
    var ProxySingletonCreateDiv = (function () {
        var instance;
        return function (html) {
            if (!instance) {
                instance = new CreateDiv(html);
            }
            return instance;
        }
    })();

    var a = new ProxySingletonCreateDiv('sven1');
    var b = new ProxySingletonCreateDiv('sven2');

    console.log(a === b); //true

    /**
     * 第三种实现方式 直接定义对象
     **/
    var dan = {
        name:'单例模式',
        id:3,
        say:function(){
            console.log('我是第三种单列实现思路')
        }
    }
    function getObj(){
        return dan;
    }
    let dan_1 = getObj();
    let dan_2 = getObj()
     console.log('第三种实现判断',dan_1 === dan_2)
     dan_2.say()
   
