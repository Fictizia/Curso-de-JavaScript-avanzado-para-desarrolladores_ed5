// Mi solución
// function mayorDivisible(divisor, limite) {
//     let divisible;
//     for(let i = 0; i < limite; i++) {
//         if( i % divisor === 0 ){
//             divisible = i
//         }
//     }
//     return divisible;
// }

// Con los ajustes comentados: el for se podría hacer hacia atrás, así encontramos el mayor más rápido
function mayorDivisible(divisor, limite) {
    for(let i = limite; i > 0; i--) {
        if( i % divisor === 0 ){
            return i
        }
    }
    return 0;
}

console.info(mayorDivisible(2, 9)); // 8
console.info(mayorDivisible(3, 16)); // 15