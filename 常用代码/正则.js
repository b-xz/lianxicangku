/*
 * @Author: your name
 * @Date: 2021-06-09 15:57:21
 * @LastEditTime: 2021-06-09 17:43:30
 * @LastEditors: Please set LastEditors
 * @Description: 正则表达式
 * @FilePath: \常用代码\正则.js
 */
'正则表达式是用于匹配字符串中字符组合的模式; 正则表达式是匹配模式，要么匹配字符，要么匹配位置'
let a = /a/
let b = 'hello answer'

'正则 检测的方法：'

'1. test()： 检测字符串中的指定值，返回true或false'
console.log( a.test(b))

'2. exec(): 检测字符串中的包含指定值的数组，返回值是被找到的值或者null'
console.log(a.exec(b))

'3. match(): 回一个数组，成员是所有匹配的子字符串'
'4. search(): 按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置'
'5. replace(): 按照给定的正则表达式进行替换，返回替换后的字符串'
'7. split(): 按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员'

''
''
''
''
