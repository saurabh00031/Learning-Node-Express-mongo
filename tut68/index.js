//creating custom modules in node using node.js

const modx=require('./mod');
console.log("this is index.js");
console.log(modx);
arr=[1,2,3,4,5,6,7];
console.log("sum is",arrayfun(arr));
//console.log("sum is",modx(arr));


let sp=modx.namex;
console.log(sp);

let spFun=modx.arrayfun(arr);
console.log(spFun);


