// Mi solución
// function esPar(num) {
//     if (num % 2 === 0 ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Con los cambios sugeridos
function esPar(num) {
    return num % 2 === 0;
}

console.info(esPar(512)); // true
console.info(esPar(317)); // false