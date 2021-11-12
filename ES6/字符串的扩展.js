/*
 * @Author: your name
 * @Date: 2021-05-13 16:51:04
 * @LastEditTime: 2021-06-04 13:43:45
 * @LastEditors: Please set LastEditors
 * @Description:  Unicode 表示法
 * @FilePath: \常用代码\ES6\字符串的扩展.js
 */

//  1. \uxxxx形式表示一个字符， xxxx表示Unicode 码点。但只限于\u0000~\uFFFF之间，超过范围的字符，必须用双字节
console.log("\u0067")
console.log("\uD842\uDFB7")
// 2. es6解决上述的问题，用{}包围，就能正确解读
console.log("\u{20BB7}")

/*
 * @Author: your name
 * @Date: 2021-05-13 16:51:04
 * @LastEditTime: 2021-05-18 16:46:19
 * @LastEditors: Please set LastEditors
 * @Description:  includes(), startsWith(), endsWith()
 * @FilePath: \常用代码\ES6\字符串的扩展.js
 */

// 1. es6之前，js只有indexOf方法确定一个字符是否包含在一个字符串中
// 2. includes : 返回布尔值，表示是否找到了参数字符串
let s = 'Hello world!'
console.log(s.includes('o'))
// 3. startsWith :返回布尔值，表示参数字符串/字符是否在原字符串的头部
console.log(s.startsWith('H'))
// 4. endsWith : 返回布尔值，表示参数字符串/字符是否在原字符串的尾部
console.log(s.endsWith('!'))

/*
 * @Author: your name
 * @Date: 2021-05-13 16:51:04
 * @LastEditTime: 2021-05-18 16:46:19
 * @LastEditors: Please set LastEditors
 * @Description:  repeat()
 * @FilePath: \常用代码\ES6\字符串的扩展.js
 */
// 1. repeat ： 将一个字符或字符串重复n次, 
// 2. 参数如果是小数，则会被取整(如2.9 =》 2)
// 3. 参数如果是负数或者Infinity,会报错
// 4. 参数如果是0到1之间的小数，会取0，若是0到-1之间，取整后为-0，等同于0
// 5. 参数NaN等同于0，参数如果是字符串，会先转换成数字，
console.log('x'.repeat(2))
console.log(s.repeat(2))
console.log(s.repeat('5'))
console.log(Number('x'))  // NaN

/*
 * @Author: your name
 * @Date: 2021-05-13 16:51:04
 * @LastEditTime: 2021-05-18 16:46:19
 * @LastEditors: Please set LastEditors
 * @Description:  padStart()，padEnd()
 * @FilePath: \常用代码\ES6\字符串的扩展.js
 */
//  es2017 引入了字符串补全长度的功能，padStart会在头部补全，padEnd()用于尾部补全,且不会改变原变量
// 2. padStart与padEnd 接受两个参数，第一个参数用来指示字符串的最小长度，第二个参数是补全的字符串或字符
// 3. 若原字符串的长度大于或等于指定的最小长度，则返回原字符串
// 4. 若补全的字符串的长度超过指定的最小长度，则会截取超出位数的补全字符串
// 5.  若第二个参数省略，默认使用空格补全长度
let a = 'world!'
console.log(a.padStart('7','abcg'))
console.log(a.padStart('8','a'))

/*
 * @Author: your name
 * @Date: 2021-05-13 16:51:04
 * @LastEditTime: 2021-05-18 16:46:19
 * @LastEditors: Please set LastEditors
 * @Description:  模板字符串
 * @FilePath: \常用代码\ES6\字符串的扩展.js
 */

// 1. 模板字符串是增强版的字符串，可以定义普通字符串，也可以定义多行字符串，或在字符串嵌入变量
// 2. 因为模板字符串本身是反引号标识，所以在模板字符串中使用反引号，则前面要用反斜杠转义
// 3. 使用trim()方法，可以去除字符与模板字符串之间的空格
// 4. 模板字符串嵌入变量，可以写在${}中，${}中可以放入变量，运算，对象属性，函数
console.log(`
string text line 1
string text line 2
`);
console.log(`
string text line 1
string text line 2
`.trim());
console.log(`\`Yo\` World!`)
// 5. 模板字符串可以嵌套模板字符串，
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data),'tmpl');
//  引用模板字符串，在需要时执行
let str = '(name) => `Hello ${name}!`';
let func = eval.call(null, str);
console.log(func('Jack'))