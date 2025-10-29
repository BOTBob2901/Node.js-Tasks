"use strict"
// Igor Nikonov, Saher Haddad
const nums = [1,0,3,0,0,5,6,7,8,0];
let count = 0;
nums.forEach((num) => {
  num === 0 ? count ++ : count += 0; 
}); 
console.log(count);

