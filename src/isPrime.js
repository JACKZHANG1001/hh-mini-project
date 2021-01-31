'use strict';

function isPrime(num) {
    if (num <= 1) return false;
    else {
        var i = 2;
        for (; i < num; i++) {
            if (num % i === 0)
                return false;
        }
        return true;
    }
}

module.exports = isPrime;
