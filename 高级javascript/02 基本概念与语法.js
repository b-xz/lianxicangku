"任何语言的核心都是描述这门语言的最基本工作原理"
"描述内容通常涉及 语言的语法，操作符，数据类型，内置功能等用于构建复杂解决方案的基本概念"
/**
 * 语法 
 * ECMAScript语法大量借鉴了C及其他类C语言
 */
"1. 区分大小写： ECMAScrip的一切都区分大小写，包含变量，函数，操作符"
"2. 标识符：指变量，函数，属性的名字，或者函数的参数 "
    "标识符规则：第一个字符必须是一个字母、下划线或$；其他字符可以是字母，下划线或$,数字"
    "关键字，保留字，true，false和null当作标识符"
"3. 语句：规定以分号为语句的结尾，也会适当增加代码的性能"
    "以{}里的内容表示一个代码块"
"4. 关键字：控制语句的开始或结束，或用于执行语句的特定操作"
"5. 保留字：没有特定用途，可能被用作关键字"
"6. 变量：为松散类型，即可能为任何类型的数据；未经过初始化的变量会被赋予undefined；省略var会全局定义变量；"
"6.1  将变量用逗号进行隔开，可以使用一条语句定义多个变量"

"7. 数据类型：undefiend,null,boolean,number,string 五个基本类型, 一个复杂类型Object"
"7.1 typeof可以检测基本类型除了null；typeof是一个操作符"
let a = function(){}
console.log(typeof a)