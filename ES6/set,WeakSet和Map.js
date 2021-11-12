/*
 * @Author: your name
 * @Date: 2021-06-30 17:09:44
 * @LastEditTime: 2021-07-22 14:29:36
 * @LastEditors: Please set LastEditors
 * @Description: es6 Set
 * @FilePath: \常用代码\ES6\set和Map.js
 */
'Set是一个构造函数，用来生成Set数据结构;类似数组,但成员的值是唯一的,没有重复值'
'Set添加值，不会进行类型转换，使用的算法是“Same-value equality”，类似===运算符，区别在与 NaN等于自身'
'Set 添加对象 认为对象是不相等的，所以会认为是两个值'

let b = [2, 4, 5, 3, 6, 8, 4, 5, 1, 7, 8, 2, 0]
'去除数组重复元素'
"方法1"
let d = [...new Set(b)]
"方法2"
function dedupe(array) {
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
let c = new Set([1, 5, 1, 4, 2, 8, 4, 5, 1, 6])
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
for (let i of a.keys()) {
    // console.log(i)
}
'Set结构的实例默认可遍历，默认遍历器生成函数是values方法。所以可以直接使用for...of循环遍历'
for (let i of a.values()) {
    // console.log(i)
}
'entries返回的遍历器对象，包括键名与键值。每次返回一个数组，其成员相同'
for (let i of a.entries()) {
    // console.log(i)
}

'遍历的应用: '
'1. 扩展运算符(...)内部使用for...of循环，所以可以使用Set结构'
'扩展运算符和Set结构结合，可以去除数组的重复成员'
let set = new Set(['red', 'green', 'blue'])
let arr = [...set]
let arr1 = [...new Set([5, 1, 4, 2, 3, 6, 1, , 5, 2, 48, 2, 7])]
'map和fliter方法也可以间接用于Set'
let set1 = new Set([1, 2, 3, 4, 5])
let map1 = new Set([...set1].map(i => i + 1))
let filter1 = new Set([...set1].filter(i => i > 3))

'set可以实现 交集 并集 差集'
// let b = [2,4,5,3,6,8,4,5,1,7,8,2,0] 
'并集'
let union = new Set([...set1, ...b])
console.log(union)
'交集'
let intersect = new Set([...b].filter(i => set1.has(i)))
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
'WeakSet 没有size属性，无法遍历其成员'
'用法：（1）检测循环引用（2）创建dom节点'

/*
 * @Author: your name
 * @Date: 2021-06-30 17:09:44
 * @LastEditTime: 2021-07-02 10:02:47
 * @LastEditors: Please set LastEditors
 * @Description: es6 Map
 * @FilePath: \常用代码\ES6\set和Map.js
 */

'JS的对象，本质是键值对的集合(Hash集合)，但只能用字符串当做键。提供了“字符串—值”的对应'
'Map也是键值对的集合，但各种类型的值可以当作键；提供“值-值”的对应'
let m = new Map
let n = { 'p': "cein" }
m.set(n, 'name')
console.log(m)  //Map(1) { { p: 'cein' } => 'name' }
let map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);
console.log(map)  //Map(2) { 'name' => '张三', 'title' => 'Author' }

'Map的方法'
'1.set(key,value):返回Map本身,为Map的对象添加键值对(可以使用链式写法)；对同一个键赋值，则会后面的值覆盖前一个值'
m.set(a, 'dee').set(b, 'fff')
'2.get(key):读取Map对象中的键，如果读取未知的键，则返回undefined'
m.get(n)  //  name
'3.has(key)：返回布尔值，判断该键是否为Map的成员'
m.has(a)
'4.delete(key): 在Map对象中删除此键,返回布尔值,成功返回true,失败返回false'
m.delete(a)
'5.clear()：清除所有成员，没有返回值'
'Map的键跟内存地址绑定，当键为对象时，只有对同一个键且内存地址相同，Map才会将其视为同一个键'
'若以简单类型的值作为键(数字,字符串,boolean,undefined,null,NaN),Map将其视为同一个键'
m.set(['a'], 5555)   //表明针对同一个键，实际两个值得内存地址不同，get方法无法读取此值
m.get(['a'])  //undefined

'Map的属性'
'1.size属性：返回Map结构的成员总数'
m.size
'Map遍历：遍历的顺序是插入顺序'
'keys(): 返回键名的遍历器'
for (let key of m.keys()) {
    // console.log(key)
}
'values():返回键值的遍历器'
for (let value of m.values()) {
    // console.log(value)
}
'entries():返回所有成员的遍历器'
for (let item of m.entries()) {
    // console.log(item[0],item[1])
}
'forEach():与数组的方法类似,遍历Map的所有成员;接受第二个参数,绑定this(没找到其用法)'
var reporter = { report: { 12: 15 } }
m.forEach((value, key, item) => {
    // console.log(value,key)
    // console.log(this.report)   //undefined
}, reporter)

'与其他数据结构的互换'
'(1) Map与数组的互换'
let g = new Map().set(1, 5)
let array = [...g]  //Map转数组  为二维数组
let f = new Map(array)  //数组转Map
'(2) Map与对象互转'
'Map转对象的前提条件：Map的所有键名都为字符串'
function MaptoObj(strMap) {
    let obj = Object.create(null)
    for (let [value, key] of strMap) {  // Map转对象
        obj[value] = key
    }
    return obj
}
let obj1 = MaptoObj(g)
function objToMap(obj) {
    let a = new Map()
    for (let i in obj1) {
        a.set(i, obj1[i])
    }
    return a
}
objToMap(obj1)
'(3)Map与JSON互转'
'Map转JSON分两种情况，一、Map的键名都是字符串,可转为对象JSON；二、Map的键名有非字符串,转为数组JSON'
let objJSON = JSON.stringify(MaptoObj(g))  //对象JSON
let arrJSON = JSON.stringify([...m])  //数组JSON
'JSON转Map,一、所有键名都是字符串，利用对象转数组。二、整个JSON都是数组,且数组成员本身有一两个成员的数组,可以一一对应转为Map'
let mapJSON = objToMap(JSON.parse(objJSON)) //字符串
let mapJSON1 = new Map(JSON.parse(arrJSON)) //数组字符串

/*
 * @Author: your name
 * @Date: 2021-06-30 17:09:44
 * @LastEditTime: 2021-07-02 10:02:47
 * @LastEditors: Please set LastEditors
 * @Description: es6 WeakMap
 * @FilePath: \常用代码\ES6\set和Map.js
 */
'WeakMap与Map对象的结构类似，区别在只接受对象做为键名(null除外)，不接受其他类型的值作为键名'
