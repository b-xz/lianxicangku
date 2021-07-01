/*
 * @Author: your name
 * @Date: 2020-11-06 15:17:53
 * @LastEditTime: 2021-04-01 13:23:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常用代码\time.js
 */
let a ={
    "MPID": "模型部件ID",
    "DELIVERYTIME": "设备出厂时间",
    "NUM": "序号",
    "FACTORYINFO": "设备厂家信息",
    "POSITION": "设备安装位置",
    "MPNAME": "模型部件名称",
    "A":"这是测试"
}
// let a = ['A','C','LSO','DLOO']
// let b = a.sort((a,b))
// console.log(a.sort())
let arr1 = Object.keys(a)
console.log(arr1)
let arr2 = arr1.sort()
console.log(arr2)
let obj = {}
arr2.forEach((item,index)=>{
    obj[item] = a[item]
    // for(let i in a ){
    //     if(i===item){
    //         obj[item]=a[i]
    //     }
    // }
})
console.log(obj)