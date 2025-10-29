"use strict";
// Igor Nikonov, Saher Haddad

const nums = [1, 0, 3, 0, 0, 5, 6, 7, 8, 0]; // Array of numbers
let count = 0; // Counter for zeros

// Loop through each number and count how many are zeros
nums.forEach((num) => {
  num === 0 ? count++ : count += 0;
});

// Print total number of zeros found
console.log(count);


