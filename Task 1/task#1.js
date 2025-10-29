"use strict";
// Igor Nikonov, Saher Haddad
const num = 300;
const ans1 = num % 2 === 0;
const ans2 = num % 3 === 0;
const ans3 = num % 5 === 0;

console.log(Number(ans1) + Number(ans2) + Number(ans3));
