const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let a=[];
  for(let i=1;i<=10;i++){
    
    a.push(addNums(i*increment));
    
  }
  return a;


}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let a=[];
  for(let i=1;i<=10;i++){
      
      a.push(addManyNums(i*increment));
      
    }
    return a;

}

module.exports = [addNums10, addManyNums10];