/*
 * @Author: your name
 * @Date: 2021-05-20 08:45:35
 * @LastEditTime: 2021-05-20 11:34:26
 * @LastEditors: Please set LastEditors
 * @Description: 二进制与八进制表示法
 * @FilePath: \常用代码\ES6\数值的扩展.js
 */
// 1. 二进制：前缀带有 0b(0B)
// 2. 八进制：前缀带有 0o(0O),es5严格模式下，不允许使用前缀0表示
// 3. 将二进制与八进制转为十进制，使用Number方法
0b111110111 === 503 // true
0o767 === 503 // true
console.log(Number('0b111'))

/*
 * @Author: your name
 * @Date: 2021-05-20 08:45:35
 * @LastEditTime: 2021-05-20 08:49:45
 * @LastEditors: Please set LastEditors
 * @Description: Number.isFinite(), Number.isNaN()
 * @FilePath: \常用代码\ES6\数值的扩展.js
 */

// Number.isFinite()检查一个数值是否有限,用布尔值表示
console.log(Number.isFinite(15),'isFinite')
console.log(Number.isFinite(0.5))
console.log(Number.isFinite(Infinity))
// Number.isNaN()检查值是否为NaN，用布尔值表示
console.log(Number.isNaN(15),'isNaN')
console.log(Number.isNaN('15'))
console.log(Number.isNaN(true))
console.log(Number.isNaN('汉'))
console.log(Number.isNaN(NaN))

/*
 * @Author: your name
 * @Date: 2021-05-20 08:45:35
 * @LastEditTime: 2021-05-20 08:49:45
 * @LastEditors: Please set LastEditors
 * @Description: Number.isInteger(), Number.parseInt(),Number.parseFloat(), Number.EPSILON
 * @FilePath: \常用代码\ES6\数值的扩展.js
 */

// 1. es6 将 parseInt()与 parseFloat() 移植到Nunmber对象，行为不变
// 2.  Number.isInteger()判断一个值是否为整数,用布尔值表示,其内部运算不会进行隐式转换
console.log(Number.isInteger(15),'isInteger')
console.log(Number.isInteger(Number('15')))  // true
console.log(Number.isInteger('15'))  // false
console.log(Number.isInteger(15.1))  // false
// 3. Number.EPSILON 实质是一个可接受的误差范围, 表示1与大于1的最小浮点数之间的差
console.log(0.1+0.2)
console.log(Number.EPSILON)
function withinErrorMargin (left, right) {
    return Math.abs(left - right) < Number.EPSILON;
  }
console.log(withinErrorMargin(0.1 + 0.2, 0.3))
  // true
console.log(withinErrorMargin(0.2 + 0.2, 0.3)) 

/*
 * @Author: your name
 * @Date: 2021-05-20 08:45:35
 * @LastEditTime: 2021-05-20 08:49:45
 * @LastEditors: Please set LastEditors
 * @Description: Math.trunc(),Math.sign(),Math.cbrt()，Math.hypot()
 * @FilePath: \常用代码\ES6\数值的扩展.js
 */

//  1. Math.trunc() 用于去除数值的小数部分，返回整数部分。与parseInt()相同。内部会隐式转换
console.log(Math.trunc(4.9),'Math.trunc')
console.log(parseInt('4.9'),'parseInt')
// 2. Math.sign()判断一个数是正，负，还是零。会返回五种值，内部会先进性隐式转换
console.log(Math.sign(-5),'Math.sign')  // 参数为负值，返回-1
console.log(Math.sign(5))  //参数为正值，返回1
console.log(Math.sign(-0)) //参数为-0，返回-0
console.log(Math.sign(0))   //参数为0，返回0
console.log(Math.sign('foo')) //参数为其他值，返回 NaN
// 3. Math.cbrt() 计算一个数值的立方根,内部会进行隐式转换。参数转换后也不是数值，返回值是NaN
console.log(Math.cbrt(8),' Math.cbrt()')
console.log(Math.cbrt('10'))
console.log(Math.cbrt('foo'))
console.log(Math.cbrt(true))
// 4. Math.hypot() 返回所有参数平方和的平方根。若参数不是数值，会先进行转换数值，若无法转换，则返回NaN
console.log(Math.hypot(3,4)) // 5  3^2 + 4^2

/*
 * @Author: your name
 * @Date: 2021-05-20 08:45:35
 * @LastEditTime: 2021-05-20 08:49:45
 * @LastEditors: Please set LastEditors
 * @Description: 指数运算符 ** 
 * @FilePath: \常用代码\ES6\数值的扩展.js
 */
// **  指数运算符 
console.log( 2 ** 3,'指数运算符')
//  可以与等号结合，形成新的赋值运算符
let b = 2 
console.log(b **= 2)
// 指数运算符与Math.pow()在V8引擎中，实现不同，在计算大的运算结果，会表现细微的差异
console.log(Math.pow(99, 99),'Math.pow')
console.log(99 ** 99,'Math.pow')