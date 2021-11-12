var Dictionary = { Ⅰ:'1',Ⅱ:'2',Ⅲ:'3',Ⅳ:'4'}

var a = 'Ⅰ'
// for (var key in Dictionary) {
//     　　var item = Dictionary[key];
//         console.log(key)
//     　　console.log(item); //AA,BB,CC,DD
    
//     }
console.log(Dictionary[a])

function convert(num) {
    var a=[["","I","II","III","IV","V","VI","VII","VIII","IX"],  ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],  
  ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
   ["","M","MM","MMM"]];  
    var i=a[3][Math.floor(num/1000)];
    var j=a[2][Math.floor(num%1000/100)];
    var k=a[1][Math.floor(num%100/10)];
    var l=a[0][num%10];
    return  i+j+k+l;
     
  }
  ;
console.log(convert(0))
// var ss = '1,e,2r,drf,dsfds,fdsfwf,55';
// var msg = ss.substring(ss.lastIndexOf(','));
// console.log(msg);


// let c = undefined
// if(c){
//     console.log('aa')
//     // console.log(Boolean(undefined))
// }




