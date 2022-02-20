//Blocking and Non-blocking excutions

//synchronous or blocking
//line to line execute hota...usko synchronous bolte hain

//asynchronous or non-blocking
//jo nahi hota...usko.....asynchronous bolte hain
//callbacks and promises r there



const fs=require("fs");

// a == error deta hoga toh
// b == data deta hoga toh

const text=fs.readFile("tut64.txt","utf-8",(a,b)=>{

console.log(a,b);

});
console.log("this is a msg");
