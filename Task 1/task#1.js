"use strict";
// Igor Nikonov, Saher Haddad

const num = 300; // Number to check

// Check if num is divisible by 2, 3, and 5
const ans1 = num % 2 === 0;
const ans2 = num % 3 === 0;
const ans3 = num % 5 === 0;

// Convert booleans to numbers (true→1, false→0) and sum them
console.log(Number(ans1) + Number(ans2) + Number(ans3));

