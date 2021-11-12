/*
 * @Author: your name
 * @Date: 2021-05-31 10:54:09
 * @LastEditTime: 2021-07-21 15:59:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常用代码\ES6\Symbol.js
 */
'es5的对象属性名都是字符串,容易造成属性名冲突'
'Symbol: 保证每个属性名都是独一无二的，避免属性名冲突'
'Symblo是一个原始数据类型(类似字符串的数据类型)，表示独一无二的值'
'Symblo是通过Symbol函数生成的，即对象的属性名有两种类型，一是原本的字符串，第二是新增的Symbol类型(凡属性名为Symbol类型，都是独一无二，不与其他属性名冲突)'
'Symbol函数前不能使用new命令,否则会报错，因为生成的Symbol是一个原型类型的值，不是对象,所以不能添加属性'
let a = Symbol()
console.log(typeof a)

'Symbol函数可以接受一个字符串为参数，表示对Symbol实例的描述'
'Symbol函数的参数只是表示对当前的Symbol的描述，因此相同参数的Symbol函数的返回值也是不等的'
'Symbol函数不能与其他类型的值进行运算或者拼接，否则报错'
'Symbol值可以显式转为字符串'
'Symbol值也可以转为布尔值，但是不能转为数值'
let b = Symbol('foo')
console.log(b,'b')
console.log(b.toString(),'b')
// console.log(`your symbol is ${b}`)  //报错
let obj = {
    toString(){
        return 'aaa'
    }
}
let c = Symbol(obj)
console.log(c)

'作为属性名的Symbol,由于每个Symbol值都是不等的，Symbol作为标识符，能保证不会出现不同的属性名，防止某个键被改写或覆盖'
let mySymbol = Symbol('mySymbol')
let obj1 = {}
obj1[mySymbol] = 'Hello World!!!' 
Object.defineProperty(obj1,mySymbol,{value:'Hello'})
'Symbol作为对象属性名时，不能使用点运算符(点运算符后是字符串，不能读取Symbol作为标识名的值)'
'在对象的内部，定义Symbol值定义属性时，Symbol值须放在方括号中'
obj1.mySymbol = 'World!'
console.log(obj1[mySymbol])
'魔术字符串:在代码多次出现，与代码形成强耦合的某个具体的字符串或数值。'
'耦合：指两个或两个以上的体系或者两种运动形式间通过相互作用而彼此影响的现象。分为高内聚低耦合与强耦合'
'高内聚低耦合：极少引用全局类或者方法，可以缺少除其本身之外的方法或类'
'强耦合：引用全局类或方法较多，不能缺少对应的类或方法'

function getResults(param ){{
        // 函数中赋值 'name',所以 'name' 这个字符串就是魔术字符串
        if(param == 'name'){console.log(param)}}}
getResults('name')
'清除魔术字符串，将常量变为变量'

'属性名遍'
'Object.getOwnPropertySymbols : 获取指定对象的所有Symbol的属性'
console.log(Object.getOwnPropertySymbols(obj1))
'Reflect.ownKeys方法可以返回所有类型的键名,包括常规键与Symbol键名'
console.log(Reflect.ownKeys(obj1))
'因为Symbol作为名称的属性，不会被常规方法遍历。可以利用Symbol，为对象定义私有性的属性或者方法'
''