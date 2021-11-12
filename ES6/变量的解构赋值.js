/*
 * @Author: 安露
 * @Date: 2021-05-12 14:55:24
 * @LastEditTime: 2021-05-13 16:34:16
 * @LastEditors: Please set LastEditors
 * @Description: 数组的解构赋值用法
 * @FilePath: \常用代码\变量的解构赋值.js
 */
// 1. 模式匹配  等号两边的模式相同，左边变量被赋予对应的值 .若等号右边的值不是数组(或不可遍历)将会报错
// 2. 某种数据解构具有Iterator接口，够可以采用数组的解构赋值
// 数组的取值按照顺序进行，变量的取值有顺序决定
let [a,b,c] = [1,2,3,4]
console.log(a,b,c)
let [foo,[bar],baz] = [1,[2],4]
console.log(foo,bar,baz)
// let [head,...title] = [1,2,3,4] 
let [head,...title] = [1,[2,3],4]
console.log(head,title)
let [far, [fba], d] = [1, [2, 3], 4];
console.log(far,fba,d)

//  默认值： es6使用严格相等运算，判断一个位置是否有值，若等于undefined，默认值才有效
// 默认值可以引用解构赋值的其他变量，但该变量必须已申明
// 默认值若是一个表达式， 则只有在默认值为undefiend时才会调用
function dlt(){
    let [x = 1] = []
    console.log(x)
    let [a,b = 1] = [2]
    let [c,d = 2] = ['c','d']
    console.log(c,d)
    // let [foo = bar, bar = 1] = []
    // console.log(foo,bar)
}
dlt()
/*
 * @Author: 安露
 * @Date: 2021-05-12 14:55:24
 * @LastEditTime: 2021-05-12 15:48:19
 * @LastEditors: Please set LastEditors
 * @Description: 对象的解构赋值用法
 * @FilePath: \常用代码\变量的解构赋值.js
 */
// 1. 对象的属性与变量同名 才能取到正确的值，若没有相同的同名属性，则值为undefined
// 2. 可以将对象的方法，赋值到某个变量
// 3. 对象结构变量赋值：找到同名属性，赋值给对应的变量，被赋值的是变量，而不是同名属性=> {name:baz}
// 4. 解构赋值可以取到继承的属性
function obj(){
    let {foo,bar} = { foo: 'aaa', bar: 'bbb'}
    console.log(foo,bar)
    let { log } = console
    log(5)

    let {name:baz} = {name: 'aaa', bar: 'bbb' } 
    // 提取json数据
    let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
      };
      
      let { id, status, data } = jsonData;
      console.log(id, status, data)

    //    遍历Map结构：有Iterator 接口的对象都可以用 for ... of 循环遍历
    const map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');

    for (let [key, value] of map) {
    console.log(key + " is " + value);
    }
    let arr = [4,5,8,4,6,9,1,5,38,1,45]
    for(let key of arr){
        console.log(key,'key')
    }
}
obj()

