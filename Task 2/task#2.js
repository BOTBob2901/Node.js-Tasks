"use strict"
// Igor Nikonov, Saher Haddad

// Loop from 2 to 236 and print prime numbers
for (let j = 2; j < 237; j++) {
  if(is_prime(j))
    console.log(j)
}

// Function to check if a number is prime
function is_prime(num) {
  // Check divisibility from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) 
      return false; // Not prime if divisible
  }
  return true // Prime if no divisors found
}

