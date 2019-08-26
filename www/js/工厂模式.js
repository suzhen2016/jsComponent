/**
 * 1.概念 定义一个创建对象的方法，传入不同的参数返回不同的对象；创建同一类对象的不同实列
 * 
 * A.简单实现，就是一个对象传参
 * 
 * B.实现复杂模式下，父类定义抽象的方法，子类去实现改抽象的方法，使用到继承、
 * 
 * 解释：
 * 
 * 优点：提高了代码的可重用性，降低了各模块之前的代码耦合性；
 * 
 * 缺点：A类实现的对象的构造类指向Object，不能明确类型
 * 
 */
    //B.定义一个父类 ，属性在函数内，方法在原型上实现
    var person = function (name) {this.name=name}
    // 原型绑定方法
    person.prototype = {
        init:function(param){
            this.name = param.name;
        },
        say:function (param) {
            throw new Error('请初始化改实列方法')
        }
    }

    var per1 = Object.create(person.prototype) //创建原型对象的子类，这样也不会改变原型的指向

    per1.init({name:'新工厂'})

    console.log(per1)

    console.log('检测per1是否是person的子类', per1 instanceof person)

    per1.say = function (params) {

        console.log('我是per1独特的技能',params)
    }

    per1.say('体育运动')


    //A.直接定义一个对象返回
    function getObj(){
        var dan = {
            name:'单例模式',
            id:3,
            say:function(){
                console.log('我是第二种工厂实现思路')
            }
        }
        return dan;
     }

     console.log('第二种实现',getObj())
     console.log(getObj().say())
