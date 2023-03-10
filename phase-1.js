// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let a=0;
  for(let i=1;i<=n;i++){
    a+=i;
  }
  return a;


}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let b=0;
  for(let i=1;i<=n;i++){
    b+=addNums(i);
  }
  return b;
}



module.exports = [addNums, addManyNums];