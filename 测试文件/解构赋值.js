// 从数组或对象中提取数值 对变量赋值 称为 解构
// 模式匹配 按照对应位置 对变量赋值 若解构失败 其值为undefined
let [a,b,c] = [1,2,3]


// 嵌套解构 
let [d,[[e],f]] = [1,[[2],3]]

let [,,...aa] = [1,2,3,4]  // aa = [3,4]
let [,,bb] = [1,2,3] // bb = 3