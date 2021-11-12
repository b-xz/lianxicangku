/*
 * @Author: your name
 * @Date: 2021-05-25 17:09:40
 * @LastEditTime: 2021-05-31 10:48:56
 * @LastEditors: Please set LastEditors
 * @Description: 属性的简洁表示
 * @FilePath: \常用代码\ES6\对象的扩展.js
 */
'允许直接写入变量和函数，作为对象的属性与方法'
let foo = 'bar'
let baz = {foo}
console.log(baz)
'方法的简写'
var o = {
    method() {
      return "Hello!";
    }
}
// 等同于
var o = {
    method: function() {
        return "Hello!";
    }
}
'若某方法的值是Generator函数，前面要带有*'
var obj = {
    * m(){
      yield 'hello world';
    }
};

/*
 * @Author: your name
 * @Date: 2021-05-25 17:09:40
 * @LastEditTime: 2021-05-26 08:59:35
 * @LastEditors: Please set LastEditors
 * @Description: 属性名的表达式
 * @FilePath: \常用代码\ES6\对象的扩展.js
 */

 '定义对象的属性，有两种方式：一、直接用标识符作为属性名； 二、用表达式作为属性名(形式为：[]) '
 '表达式表示法与简洁表示法不能同时使用，否则会报错'
//  标识符
obj.foo  = true
//  表达式
obj['a'+'bbb'] = true     
console.log(obj)

'在使用字面量定义对象(使用{}),ES5只允许使用标识符定义，ES6两种都可以'
let propKey = 'foo';
let objj = {
  [propKey]: true,
  ['a' + 'bc']: 123,
  aa:158
}
console.log(objj,'objj')

'表达式可以定义方法名'
let objName = {
  ['h' + 'ello']() {
    return 'hi';
  }
};
console.log(objName.hello())
'若表达式是一个对象，默认情况下会将对象自动转换为字符串[object Object]'
const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
}
console.log(myObject)

/*
 * @Author: your name
 * @Date: 2021-05-25 17:09:40
 * @LastEditTime: 2021-05-26 08:59:35
 * @LastEditors: Please set LastEditors
 * @Description: 方法的name属性
 * @FilePath: \常用代码\ES6\对象的扩展.js
 */

'函数的name属性，返回函数名，对象也是函数，因此具有name属性'
const person = {
  sayName(){
    console.log('hello World!!!')
  }
}
console.log(person.sayName.name)
'若对数使用了取值函数与存值函数，其对象属性在描述对象的get与set属性上'
const getSet = {
  get foo() {},
  set foo(x) {}
}
const descriptor = Object.getOwnPropertyDescriptor(getSet, 'foo'); '指定的属性存在于对象上，则返回其属性描述符对象'
console.log(descriptor.get.name)

/*
 * @Author: your name
 * @Date: 2021-05-25 17:09:40
 * @LastEditTime: 2021-05-26 08:59:35
 * @LastEditors: Please set LastEditors
 * @Description: Object.is()与Object.assign()
 * @FilePath: \常用代码\ES6\对象的扩展.js
 */
'Object.is是es6新推出比较两值是否相等，用来比较两值是否严格相等'
'与严格运算符不同(===)是:一、 +0不等与-0；二、NaN等于自身'
let fObject = {}
console.log(fObject === fObject)
console.log(Object.is('fObject', 'fObject'))


'Object.assign用于对象的合并，将源对象的所有可枚举属性(能被for....in遍历查找到)，复制到目标对象'
'Object.assign的第一个参数为目标对象，剩余的参数为源对象'
let target = { a: 1 };
let source1 = { b: 2 };
let source2 = { c: 3 };
Object.assign(target,source1,source2)
source1 = {b:6}
console.log(target,'target')
'若目标对象与源对象有同名属性，或者源对象互有同名属性，则后面的属性会覆盖前面的属性'
let target1 = {a: 1, b: 1 }
let source3 = {b: 2, c: 2}
let source4 = {c:5}
Object.assign(target1,source3,source4)
console.log(target1)
'若只有一个参数，会直接返回该参数;若参数不是对象，会先转为对象，再进行返回;因为undefined和null无法转为对象，若它们作为参数，就报错'
console.log(Object.assign(2))  // [Number: 2]
// console.log(Object.assign(undefined))  //报错
'若非对象参数出现在源对象的位置，会先进性对象转换，若无法转为对象，就会跳过'
'其他类型的值不在首参数，也不会报错；但除了字符串会以数组形式，拷贝进入对象，其他值都不会进入对象'
console.log(Object.assign(target1,8,'abc',undefined),'target1')
'Object.assign拷贝是有限制的拷贝，只能拷贝对象的本身属性(继承属性不可拷贝)，不可枚举类型也不能拷贝'
'Object.assgin属于浅拷贝;若拷贝对象的属性是一个对象，则会拷贝这个对象的引用'
'Object.assgin可以处理数组，但会把数组视为对象; 将数组的索引视为属性名，所以属性名相同，直接进行替换'
console.log(Object.assign([1, 2, 3], [4, 5]))  //4,5,3
'Object.assgin的用法：一、为对象添加属性；二、为对象添加方法、三：克隆对象、四：合并多个对象、五：为属性指定默认值'

/*
 * @Author: your name
 * @Date: 2021-05-25 17:09:40
 * @LastEditTime: 2021-05-26 08:59:35
 * @LastEditors: Please set LastEditors
 * @Description: 属性的可枚举类型;  属性的遍历
 * @FilePath: \常用代码\ES6\对象的扩展.js
 */
'对象的每个属性都有一个描述对象，控制该属性的行为；Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象'
let objFoo = {foo:123}
console.log(Object.getOwnPropertyDescriptor(objFoo,'foo')) // =》{ value: 123,writable: true,enumerable: true,configurable: true }
'描述对象的enumerable属性，称为"可枚举性",如果该属性为false，某些操作方法会忽略当前属性'
'es5有三个操作忽略enumerable为false的属性：'
'一、for...in循环：只遍历对象自身的和继承的可枚举的属性'
'二、Object.keys()：返回对象自身的所有可枚举的属性的键名'
'三、JSON.stringfy()：只串行化对象自身的可枚举的属性'
'es6新增的Object.assgin(),也忽略enumerable为false的属性，只拷贝对象自身的可枚举类型'
'es6的Class原型的方法都是不可枚举的'
Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable // false

'属性的遍历，es6共有5种的方法遍历对象的属性(得到属性名)'
'一、for...in : for...in循环遍历对象自身的和继承的可枚举属性(不含Symbol属性)'
for(i in target1){
  console.log(i)
}
'二、Object.keys(obj)：返回一个数组，包括对象自身的(不含继承的)所有可枚举属性名(不含Symbol属性)'
console.log(Object.keys(target1))
'三、Object.getOwnPropertyNames(obj): 返回一个数组，包含对象自身的所有属性名(不含Symbol属性，包括不可枚举属性)'
console.log(Object.getOwnPropertyNames(target1))
console.log(Object.getOwnPropertySymbols(target1))
'四、Object.getOwnPropertySymbol(obj): 返回一个数组，包含对象自身的所有Symbol属性'
'五、Reflect.ownKeys(obj): 返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，是否可枚举'
'这五种遍历对象的方法，都遵循同样的的属性遍历的次序规则：首先遍历所有属性名为数值的属性，按照数字排序;其次遍历所有属性名为字符串的属性，按照生成时间排序'
'最后遍历所有属性名为Symbol值的属性，按照生成时间排序。'

/*
 * @Author: your name
 * @Date: 2021-05-25 17:09:40
 * @LastEditTime: 2021-05-26 08:59:35
 * @LastEditors: Please set LastEditors
 * @Description: __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
 * @FilePath: \常用代码\ES6\对象的扩展.js
 */
'一、__proto__：本质上是一个内部属性，用来读取或设置当前对象的prototype对象；新代码认为这个属性是不存在的，所以最好不使用这个属性'

'二、Object.setPrototypeOf(): 设置一个对象的prototype对象，返回参数对象的本身'
'如果第一个参数不是对象，会自动转换为对象；由于返回的还是第一个参数，没有任何效果'
'由于undefined和null无法转为对象，如果第一个参数是这两种数，则报错 '
// Object.setPrototypeOf(object, prototype)
let proto = {};
let objProto = { x: 10 };
Object.setPrototypeOf(objProto, proto)
proto.y = 20;  proto.z = 40
console.log(objProto.y,'objProto')  // 将proto对象设为obj对象的原型，所以obj可以读取proto对象的属性
'三、Object.getPrototypeOf()：读取一个对象的原型对象，无法读取undefined和null这两个种参数'
// Object.getPrototypeOf(obj)
console.log(Object.getPrototypeOf(true),'ddd')  //Boolean

/*
 * @Author: your name
 * @Date: 2021-05-25 17:09:40
 * @LastEditTime: 2021-05-26 08:59:35
 * @LastEditors: Please set LastEditors
 * @Description: Object.keys()，Object.values()，Object.entries()
 * @FilePath: \常用代码\ES6\对象的扩展.js
 */
'Object.keys(): 返回一个数组，成员是参数对象自身的(不含继承)所有可遍历的属性的键名'
let {keys, values, entries} = Object;
let obj11 = { a: 1, b: 2, c: 3 };
for (let key of keys(obj11)) {
  console.log(key); // 'a', 'b', 'c'
}
'Object.values(): 返回了一个数组(数组的成员顺序，与属性遍历的规则相同)，成员是参数对象自身的(不含继承)所有可遍历的属性的键值'
'Object.values 会过滤属性名为 Symbol 值的属性'
'Object.values()方法的参数是一个字符串，会返回各个字符组成的一个数组'
for (let value of values(obj11)) {
  console.log(value); // 1, 2, 3
}
'Object.entries：返回一个数组，数组成员是参数对象自身的所有可遍历属性的键值对数组(只输出非Symbol值得属性)'
'Object.entries: 基本用途是：一、遍历对象的属性；二、对象转为真正的Map结构'
for (let [key, value] of entries(obj11)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}
var obj = { foo: 'bar', baz: 42 };
var map = new Map(Object.entries(obj))  // Map { foo: "bar", baz: 42 }

/*
 * @Author: your name
 * @Date: 2021-05-25 17:09:40
 * @LastEditTime: 2021-05-26 08:59:35
 * @LastEditors: Please set LastEditors
 * @Description: 对象的扩展运算符(...)
 * @FilePath: \常用代码\ES6\对象的扩展.js
 */
'解构赋值：从一个对象取值，将所有可遍历，但尚未被读取的属性，分配到指定对象上面'
'解构赋值要求等号右边是一个对象,若等号右边是undefined或null，则会报错'
'解构赋值必须是最后一个参数，否则报错。'
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 } // x :1; y:2; z :{a: 3, b: 4}
'解构赋值的拷贝是浅拷贝，如果一个键值是复合类型的值(数组，对象，函数)，解构赋值的拷贝是这个值的引用'
'解构赋值不会拷贝继承自原型对象的属性'
let o1 = {a : 1}
let b = {ac : 2}
b.__proto__ = o1
let o2 = {...b}
b.ac = 3
console.log(o2,'o2') 

'扩展运算符(...): 取出参数对象的所有可遍历属性，拷贝到当前对象中(等同于Object.assign)'
'若自定义属性，放在扩展运算符后，则扩展运算符内部的同名属性会被覆盖'
'若扩展运算符的参数是null或undefined，这个两个值会被忽略'
let f = {...z,...b,a:4,...null}
console.log(f)

/*
 * @Author: your name
 * @Date: 2021-05-25 17:09:40
 * @LastEditTime: 2021-05-26 08:59:35
 * @LastEditors: Please set LastEditors
 * @Description: Object.getOwnPropertyDescriptors()与 Null传导运算符
 * @FilePath: \常用代码\ES6\对象的扩展.js
 */
'es5有Object.getOwnPropertyDescriptor,返回对象属性的描述对象'
'es6引入了 Object.getOwnPropertyDescriptors,返回指定对象的所有自身属性(非继承)的描述对象，其目的是解决Object.assign无法正确拷贝get()与set()属性的问题'


''
