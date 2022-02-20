//modules using in node

//if file is not present...it not reads ..give errors

const fs=require("fs");
const text=fs.readFileSync("tut64.txt","utf-8");
console.log(text);

//If file is not present ..it creates in write mode

const ty="saurabh is learning js now";
fs.writeFileSync("tut64.txt",ty);


