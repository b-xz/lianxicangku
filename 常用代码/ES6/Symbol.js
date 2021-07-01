/*
 * @Author: your name
 * @Date: 2021-05-31 10:54:09
 * @LastEditTime: 2021-06-30 16:38:51
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

'作为属性名的Symbol'
''
''
''