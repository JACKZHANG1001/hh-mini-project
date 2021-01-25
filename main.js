'use strict';

// import isPrime module
var isPrime = require('./src/isPrime');

var temp = 1;

for (; temp < 100; temp++) {
    if (isPrime(temp)) {
        console.log(temp);
    }
}
