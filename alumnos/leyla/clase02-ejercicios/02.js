function esPar(num) {
    if (num % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}

console.info(esPar(512)); // true
console.info(esPar(317)); // false