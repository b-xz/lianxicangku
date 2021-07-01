/*
 * @Author: your name
 * @Date: 2021-05-21 09:09:58
 * @LastEditTime: 2021-05-25 11:39:33
 * @LastEditors: Please set LastEditors
 * @Description: 函数参数的默认值
 * @FilePath: \常用代码\ES6\函数的扩展.js
 */
 '1. es6新增了 函数参数默认值'
 '2. 参数变量是默认申明的，不能再使用let或const申明；使用参数默认值，函数不能有同名参数'
 '3. 参数默认值若是变量，参数不再是传值，而是重新计算默认表达式的值(参数默认是惰性求值)'
function log(x, y = 'World') {
    console.log(x, y);
  }
log('Hello')

let x = 99;
function foo(p = x + 1) {
  console.log(p);
}
foo()
/*
 * @Author: your name
 * @Date: 2021-05-21 09:09:58
 * @LastEditTime: 2021-05-21 09:50:29
 * @LastEditors: Please set LastEditors
 * @Description: 与解构赋值默认值结合使用
 * @FilePath: \常用代码\ES6\函数的扩展.js
 */
 '只是用了对象的解构赋值，未使用函数默认值。只有函数的参数是对象，才能解构赋值'
function afu({x, y = 5}) {
    console.log(x, y);
  }
  
afu({}) // undefined, 5
afu({x: 1}) // 1, 5
afu({x: 1, y: 2}) //1,2
' 对象解构赋值与函数默认值共同使用'
function m1(url,{x,y}={}){
    console.log(url,'url')
    console.log(x,y)
}
m1('https:www.baidu.com',{x:1,y:1})

/*
 * @Author: your name
 * @Date: 2021-05-21 09:09:58
 * @LastEditTime: 2021-05-21 09:50:29
 * @LastEditors: Please set LastEditors
 * @Description: 参数默认值的位置
 * @FilePath: \常用代码\ES6\函数的扩展.js
 */ 
 '通常我们默认 参数默认值的位置是尾参数，这样，我们可以看出省略哪些参数，'
 '若参数默认值设置位置非尾部，这个参数无法省略'
function f(x,y=1,z=2){
    console.log(x,y,z)
}
f() // [1, undefined]
f(2) // [2, undefined])
// f(2,,) // 报错

/*
 * @Author: your name
 * @Date: 2021-05-21 09:09:58
 * @LastEditTime: 2021-05-21 09:50:29
 * @LastEditors: Please set LastEditors
 * @Description: 函数的 length 属性
 * @FilePath: \常用代码\ES6\函数的扩展.js
 */
 ' 指定默认参数后，函数的length返回未指定默认参数的参数个数。即指定默认参数后，函数的length将不再正确'
 '若默认参数不再尾部指定，函数的length只包含默认参数前的参数，即函数的length不包含第一个默认参数后面的所有参数'
' length也不包含rest参数'
console.log((function (a, b = 1, c) {}).length)  // 1
console.log((function (a = 0, b, c) {}).length )  // 0

/*
 * @Author: your name
 * @Date: 2021-05-21 09:09:58
 * @LastEditTime: 2021-05-21 09:50:29
 * @LastEditors: Please set LastEditors
 * @Description: 函数的 作用域
 * @FilePath: \常用代码\ES6\函数的扩展.js
 */
'在设置参数的默认值，函数进行声明初始化，参数会单独形成作用域(不受外界因素的影响)，初始化结束后，作用域消失'
var b =2
function action(b,y =b){
    console.log(y)
}
action()
'在设置参数默认值时，若参数引用一个变量，而这个变量未定义，所以指向外层的全局变量，其函数内部的局部变量不能影响默认变量'
// let ab = 4
// function aa(y=ab,ab = 2){
//     console.log(y)
// }
// aa()
let ab = 1;
function s(y = ab) {
  let ab = 2;
  console.log(y);
}
s()

'利用参数默认值，可以决定哪个参数不能省略'
function Terrow(){
  // throw new Error('Missing parameter');
  return new Error('Missing parameter')
}
Terrow()
function far(mustValue = Terrow()){
  console.log(mustValue,'mustValue')
}
far()

/*
 * @Author: your name
 * @Date: 2021-05-21 09:09:58
 * @LastEditTime: 2021-05-21 09:50:29
 * @LastEditors: Please set LastEditors
 * @Description: rest参数与扩展运算符
 * @FilePath: \常用代码\ES6\函数的扩展.js
 */
' es6引入rest参数(写作： ...变量名)，用于获取函数的多余参数(利用rest参数，可以往函数传输任意数目的参数)'
' 可以将数组展开，将数组的元素传入函数'
 'rest参数是最后一位参数，后面不能带有任何参数，否则报错'
function add(...serve){
  let sum = 0
  for(let i of serve){
    sum += i
  }
  console.log(sum)
}
add(4,8,7,15,-4,48,25)

'扩展运算符(写作:  ...)，用于函数的调用，数组的合并，解构等等'
 '1 函数调用：将数组变为参数序列，也可以与正常的参数序列混用'
function push(array, ...items) {
  array.push(...items);
}
'2. 替代数组apply方法,'
     'ES5的写法'
Math.max.apply(null, [14, 3, 77])
      ' ES6的写法'
Math.max(...[14, 3, 77])
' 3. 合拼数组(数组末尾添加新数组):'
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];
      ' ES5的合并数组'
arr1.concat(arr2, arr3);
 'ES6的合并数组'
let acc = [...arr1, ...arr2, ...arr3] 
 '4. 与解构赋值结合，生成新数组(若扩展运算符用于数组赋值，只能放在参数最后一位)'
let [first,...rest] = [1,2,3,4,5,6,7,8]
console.log(first,'first')
console.log(rest,'rest')
'5. 函数返回值：函数返回多个值，只能使用数组或对象，可以利用扩展运算符解构返回值'
    console.log([...'hello'])
 '6. 字符串转(真)数组(能够正确识别32位Unicode字符)'
 '7. 具有Iterator接口的对象，都可以利用扩展运算符转为真正的数组'
      '对于没有Iterator接口的对象，扩展运算符无法转换，可以使用Array.from方法转换'

 '8. Map，Set，Generator函数'
'因扩展运算符内部调用Iterator接口，因此只有具有Iterator接口的对象，都可以使用扩展运算符'
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],])
let arr = [...map.keys()]
console.log(arr)

/*
 * @Author: your name
 * @Date: 2021-05-21 09:09:58
 * @LastEditTime: 2021-05-21 09:50:29
 * @LastEditors: Please set LastEditors
 * @Description: 严格模式与name属性
 * @FilePath: \常用代码\ES6\函数的扩展.js
 */
'严格模式：函数参数不能使用默认参数，解构赋值，扩展运算符。函数不能包在无参数的立即执行函数中'

'name属性：返回该函数的函数名'
'es6的改变：将一个匿名函数赋值给一个变量，es5返回空字符串；es6返回实际的函数名'
'bind返回的函数，name属性值会加上bound前缀'
let fbind = function(){}
 'ES5'
fbind.name // ""
 'ES6'
fbind.name  //"f"

/*
 * @Author: your name
 * @Date: 2021-05-21 09:09:58
 * @LastEditTime: 2021-05-21 09:50:29
 * @LastEditors: Please set LastEditors
 * @Description: 箭头函数与嵌套的箭头函数
 * @FilePath: \常用代码\ES6\函数的扩展.js
 */
'es6使用箭头定义函数'
'若箭头函数不需要或需要多个参数，使用()代表参数部分；若只需一个参数，只写参数即可'
var sum = (num1, num2) => num1 + num2;
var arrows = num1 => num1 +2
console.log(arrows(2))
'若箭头函数的代码块多于一句，使用{}包围代码块，且使用return返回'
var sum = (num1, num2) => { return num1 + num2; }
'若箭头函数直接返回一个对象，需在大括号外面加上（）'
var getTempItem = id => ({ id: id, name: "Temp" })
'箭头函数与解构变量一起使用'
const full = ({ first, last }) => first + ' ' + last
'简化回调函数'
var data = [1, 2, 3, 4];
data.map(x => x)
'rest参数与箭头函数结合'
const numbers = (...nums) => nums


'箭头函数内部可以再嵌套箭头函数'
// es5
function insert(value) {
  return {into: function (array) {
    return {after: function (afterValue) {
      array.splice(array.indexOf(afterValue) + 1, 0, value);
      return array;
    }};
  }};
}
insert(2).into([1, 3]).after(1)
// es6
let inserts = (value)=>({into:(array)=>({after:(afterValue)=>{
    array.splice(array.indexOf(afterValue) + 1, 0, value);
    return array
  }})
})
console.log(inserts(2).into([1, 3]).after(1))

'箭头函数的this绑定: 函数绑定运算符(::)，用来取代bind，call，apply的调用'
"函数绑定运算符的左边是对象，右边是函数；该运算符将左边对象绑定到右边的函数上"
'let log = ::console.console.log();'
"log('hddjdjdsd')"

/*
 * @Author: your name
 * @Date: 2021-05-21 09:09:58
 * @LastEditTime: 2021-05-21 09:50:29
 * @LastEditors: Please set LastEditors
 * @Description: 尾调用优化
 * @FilePath: \常用代码\ES6\函数的扩展.js
 */

'尾调用：函数最后一步是调用另一个函数(return函数本身)'
'尾调用不一定出现在函数尾部，但必须是最后一步操作'
'属于尾调用'
function ff(x){
  return f(x);
}
'不属于尾调用'
// 情况一
function fa(x){
  let y = f(x);
  return y;
}
// 情况二
function fs(x){
  return f(x) + 1;
}
// 情况三
function fd(x){
  f(x);
}

'尾调用优化(针对于内存空间的优化)：只保留内层函数的调用帧'
''
''