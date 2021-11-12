/*
 * @Author: your name
 * @Date: 2021-05-20 11:39:58
 * @LastEditTime: 2021-05-21 08:59:00
 * @LastEditors: Please set LastEditors
 * @Description: Array.from(),Array.of()
 * @FilePath: \常用代码\ES6\数组的扩展.js
 */
//1. Array.from用于将两类对象(类似数组的对象，可遍历的对象)转为真正的数组
// 2. 接受第二个参数，用作对每个原始的处理，将处理后的值放入返回的数组,但不会改变原数组
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
console.log(Array.from(arrayLike),'Array.from')
let a = [1, 2, 3]
console.log(Array.from(a, (x) => x * x))  // 4,5,9
console.log(a) // 1,2,3

// 3. Array.of()将一组值，转换为数组
// Array()只有参数不少于两个时，Array才返回参数组成的新数组,参数只有一个时，默认指定数组的长度.Array.of则不会出现上述情况
console.log(new Array(3,5,9,8),'Array')
console.log(Array.of(1,5,74,58,69),'Array.of')

/*
 * @Author: your name
 * @Date: 2021-05-20 11:39:58
 * @LastEditTime: 2021-05-20 14:40:13
 * @LastEditors: Please set LastEditors
 * @Description:copyWithin()
 * @FilePath: \常用代码\ES6\数组的扩展.js
 */

// 在当前数组内部，将指定位置的成员复制到其他(位置)，返回当前数组(修改原数组)
//  接受三个参数，（target，start，end）target必选，从该位置替换数据
// start可选，从当前位置读取数据，默认值为0，若为负数，则为倒数
// end可选，到该位置前停止读取数据，默认等于数组长度(到最后一位)，若为负值，表示倒数
console.log([1, 2, 3, 4, 5].copyWithin(0, 3),'copyWithin')
// -2相当于3号位，-1相当于4号位
console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1))

/*
 * @Author: your name
 * @Date: 2021-05-20 11:39:58
 * @LastEditTime: 2021-05-20 14:40:13
 * @LastEditors: Please set LastEditors
 * @Description:find(),findIndex()
 * @FilePath: \常用代码\ES6\数组的扩展.js
 */

// 找寻符合条件的数组成员
// 1. find():用于寻找第一个符合条件的数组成员，参数是一个回调函数，数组成员一次调用改函数，知道找到符合条件的成员，返回该成员。若没有，返回undefined
//  find((value,index.arr)=>{}),接受三个参数，依次为当前的值，当前位置，原数组
console.log([1, 4, -5, 10].find((n) => n < 0))
// 2. findIndex()用法与find相似，区别在与 若有符合条件，则返回其位置  若没有符合条件的 返回-1
// 两个方法都可以找到NaN
console.log([NaN].findIndex(y => Object.is(NaN, y)))

/*
 * @Author: your name
 * @Date: 2021-05-20 11:39:58
 * @LastEditTime: 2021-05-20 14:40:13
 * @LastEditors: Please set LastEditors
 * @Description:fill(),findIndex()
 * @FilePath: \常用代码\ES6\数组的扩展.js
 */
// fill使用给定值，填充一个参数,改变原数组，并将数组中的原值全部替换
//  fill接受三个参数，第一个是替换值，第二个是指定填充的其实位置，第三个参数是指定填充位置的结束位置
let v = ['a','a','v']
console.log(v.fill())
console.log(['a', 'b', 'c'].fill(7, 1, 2))

/*
 * @Author: your name
 * @Date: 2021-05-20 11:39:58
 * @LastEditTime: 2021-05-20 14:40:13
 * @LastEditors: Please set LastEditors
 * @Description:entries(),keys(),values()
 * @FilePath: \常用代码\ES6\数组的扩展.js
 */

// 三个方法都是用于遍历数组，返回一个遍历器的对象可以用for...of进行遍历
// entries是对键值对的遍历，keys是对键名的遍历，values是对键值的遍历
for (let index of ['a', 'b'].keys()) {
    console.log(index,'keys');
  }
  // 0  1
  
  for (let elem of ['a', 'b'].values()) {
    console.log(elem,'values');
  }
  // 'a' 'b'
  
  for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
  }
  // 0 "a"
  // 1 "b"

/*
 * @Author: your name
 * @Date: 2021-05-20 11:39:58
 * @LastEditTime: 2021-05-20 14:40:13
 * @LastEditors: Please set LastEditors
 * @Description:数组的实例的includes()
 * @FilePath: \常用代码\ES6\数组的扩展.js
 */

// 返回一个布尔值， 表示数组是否包含给定的值（属于es7）
// includes有两个参数，第一个参数为寻找的值(必选)；第二个值为搜索的其实位置(可选)，默认为0，若为负数，表示倒数的位置。(若数组大于数组长度，则会重0开始)
// indexOf相较于includes有两个缺点，第一个是寻找到参数出现的位置，还需要再去比较是否等于-1；第二个是内部使用严格相当预算符判断,会对NaN误判
console.log([1, 2, 3].includes(2))
console.log([NaN].includes(NaN))
console.log([NaN].indexOf(NaN)) 

/*
 * @Author: your name
 * @Date: 2021-05-20 11:39:58
 * @LastEditTime: 2021-05-20 14:40:13
 * @LastEditors: Please set LastEditors
 * @Description:数组的空位
 * @FilePath: \常用代码\ES6\数组的扩展.js
 */

//  数组的空位指：数组的某一个位置没有任何值
// es5对空位的处理,大多数是忽略的空位
// forEach(),filter(),every(),some()都会跳过空位
// map()会跳过空位，会保留这个值
// join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。
let ab = ['a',,'b'].filter(x => true)  //[ 'a', 'b' ]
let ad = ['a',,'b'].forEach((x,i) => console.log(x,i))

