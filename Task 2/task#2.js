"use strict"
// Igor Nikonov, Saher Haddad
for (let j = 2; j < 237; j++) {
  if(is_prime(j))
    console.log(j)
}

function is_prime(num){
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if ( num% i === 0) 
      return false;
  }
  return true
}
