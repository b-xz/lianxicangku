'use strict';

// 若不是es6 在浏览器报错， 函数提升 f 为 undefined
function f() { console.log('I am outside!'); }
(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f(); 
}());

// 严格模式下，变量不可提升
console.log(aa)
var  aa = 'aa'