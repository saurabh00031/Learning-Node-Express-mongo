console.log("this is mod.js");


arrayfun=(arr)=>{
    let sum=0;

    arr.forEach((element)=>{
      sum=sum+element;
    });

    return sum;
}



module.exports={
    
    
   arrayfun: arrayfun,
   namex:"saurabh",
   std:"sy",


}

//module.exports.name="saurabh";