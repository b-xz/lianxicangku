/*
 * @Author: your name
 * @Date: 2021-06-30 17:09:44
 * @LastEditTime: 2021-07-02 13:55:01
 * @LastEditors: Please set LastEditors
 * @Description: es6 Set
 * @FilePath: \常用代码\ES6\set和Map.js
 */
'Set是一个构造函数，用来生成Set数据结构;类似数组,但成员的值是唯一的,没有重复值'
'Set添加值，不会进行类型转换，使用的算法是“Same-value equality”，类似===运算符，区别在与 NaN等于自身'
'Set 添加对象 认为对象是不相等的，所以会认为是两个值'

let b = [2,4,5,3,6,8,4,5,1,7,8,2,0]
'去除数组重复元素'
"方法1"
let d = [...new Set(b)]
"方法2"
function dedupe(array){
    return Array.from(new Set(array))
}
console.log(Array.from(d))
// Set 实例和方法
'add(value)：添加某个值，返回Set结构本身'
'delete(value): 删除某个值，返回一个布尔值，表示是否删除成功,且改变原Set结构'
'has(value): 返回布尔值，表示该值是否为Set的成员'
'clear(): 清除所有成员，没有返回值'
let a = new Set()
b.forEach(element => { a.add(element) })
'Set 函数接受数组作为参数'
'Array.from() 将Set结构转为数组'
let c = new Set([1,5,1,4,2,8,4,5,1,6])
let e = Array.from(c)
c.delete(5)

// Set 实例的属性
'Set.prototype.constructor: 构造函数，默认是set函数'
'Set.prototype.size: 返回Set成员的总数'
a.size

'Set 遍历, 遍历顺序是插入顺序，例如使用Set保存一个回调函数列表，调用能保证按照添加顺序调用'
'1. keys(): 返回键名的遍历器'
'2. values(): 返回键值的遍历器'
'3. entries(): 返回键值对的遍历器'
'forEach(): 使用回调函数遍历每个成员'
// keys,values,entries 都是返回遍历器对象，因为Set结构没有键名，只有键值(或者键名与键值是同一个)。
//所以keys和values返回同一个值，
for(let i of a.keys()){
    // console.log(i)
}
'Set结构的实例默认可遍历，默认遍历器生成函数是values方法。所以可以直接使用for...of循环遍历'
for(let i of a.values()){
    // console.log(i)
}
//  entries返回的遍历器对象，包括键名与键值。每次返回一个数组，其成员相同
for(let i of a.entries()){
    // console.log(i)
}

'遍历的应用: '
'1. 扩展运算符(...)内部使用for...of循环，所以可以使用Set结构'
'扩展运算符和Set结构结合，可以去除数组的重复成员'
let set = new Set(['red', 'green', 'blue'])
let arr = [...set]
let arr1 = [...new Set([5,1,4,2,3,6,1,,5,2,48,2,7])]
'map和fliter方法也可以间接用于Set'
let set1 = new Set([1, 2, 3, 4, 5])
let map1 = new Set([...set1].map(i => i +1))
let filter1 = new Set([...set1].filter(i => i >3))

'set可以实现 交集 并集 差集'
// let b = [2,4,5,3,6,8,4,5,1,7,8,2,0]
'并集'
let union = new Set([...set1,...b])
console.log(union)
'交集'
let intersect  = new Set([...b].filter(i => set1.has(i)))
console.log(intersect)
'差集'
let difference = new Set([...b].filter(i => !set1.has(i)))
console.log(difference)

/*
 * @Author: your name
 * @Date: 2021-06-30 17:09:44
 * @LastEditTime: 2021-07-02 10:02:47
 * @LastEditors: Please set LastEditors
 * @Description: es6 weakSet
 * @FilePath: \常用代码\ES6\set和Map.js
 */

'WeakSet 不重复的值的集合，其结构与Set类似'
'WeakSet与Set区别:(1)WeakSet成员只能是对象;'
'(2)WeakSet对象是弱引用,即垃圾机制不考虑WeakSet对该对象的使用,因此WeakSet不适于引用。ES6规定WeakSet不可遍历'
'WeakSet 三个方法：(1)add: 向WeakSet添加新元素(2)delete：清除WeakSet实例的指定成员(3)has：判断某个值是否在WeakSet实例之中'
'WeakSet 没有size属性，无法遍历其成员。用处：存储dom节点'
''
''
''