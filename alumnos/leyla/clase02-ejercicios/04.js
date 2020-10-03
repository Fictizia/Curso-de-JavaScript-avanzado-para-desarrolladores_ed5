function mayorDivisible(divisor, limite) {
    let divisible;
    for(let i = 0; i < limite; i++) {
        if( i % divisor === 0 ){
            divisible = i
        }
    }
    return divisible;
}

console.info(mayorDivisible(2, 9)); // 8
console.info(mayorDivisible(3, 16)); // 15