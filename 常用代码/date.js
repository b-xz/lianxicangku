/*
 * @Author: your name
 * @Date: 2020-08-04 15:55:43
 * @LastEditTime: 2021-03-15 09:30:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常用代码\date.js
 */
// let a = [5,1,5,26,5]
// let b = a.splice(1,1)
// console.log(a)
// console.log(b)
let a = ''
if(28.39333486823206  < 60){
    console.log('aaaaa')
}else{
    console.log('bbb')
}
// 纹理贴片
function getColorRamp(elevationRamp, isVertical = true) {
     var ramp = document.createElement('canvas'); 
     ramp.width = isVertical ? 1 : 100;
      ramp.height = isVertical ? 100 : 1; 
      var ctx = ramp.getContext('2d'); 
      var values = elevationRamp; 
      var grd = isVertical ? ctx.createLinearGradient(0, 0, 0, 100) : ctx.createLinearGradient(0, 0, 100, 0); 
      grd.addColorStop(values[0], '#000000'); 
      //black grd.addColorStop(values[1], '#2747E0'); 
      //blue grd.addColorStop(values[2], '#D33B7D'); 
      //pink grd.addColorStop(values[3], '#D33038');
       //red grd.addColorStop(values[4], '#FF9742'); 
       //orange grd.addColorStop(values[5], '#ffd700'); 
       //yellow grd.addColorStop(values[6], '#ffffff'); 
       //white ctx.fillStyle = grd;
        if (isVertical) ctx.fillRect(0, 0, 1, 100); 
        else ctx.fillRect(0, 0, 100, 1); 
        return ramp; }