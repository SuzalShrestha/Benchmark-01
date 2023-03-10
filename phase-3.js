const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  let timing;
  let timingEnd;
  let a=[];
  for(let i=1;i<=10;i++){
    timing=Date.now();
    a.push(addNums(i*increment));
    timingEnd=Date.now();
    console.log(`Time Elapsed: ${(timingEnd-timing) } miliseconds.`);
  }
 
  return a;


}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  let a=[];
  for(let i=1;i<=10;i++){
    timing=Date.now();
    
    a.push(addManyNums(i*increment));
    timingEnd=Date.now();
    console.log(`Time Elapsed: ${(timingEnd-timing)/1000 } seconds.`);
    
  }
  return a;


}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);