// Crear una función que utilice una expresión regular para identificar si el parámetro str que recibe es una albóndiga. Tener en cuenta que (al igual que la RAE) hay que contemplar almóndiga. Debe ser case insensitive.

function isMeatball(str) {
    return /al(m|b)óndiga/i.test(str);
}

console.info(isMeatball('albóndiga')); // true
console.info(isMeatball('almóndiga')); // true
console.info(isMeatball('ALMÓNDIGA')); // true
console.info(isMeatball('Almándiga')); // false