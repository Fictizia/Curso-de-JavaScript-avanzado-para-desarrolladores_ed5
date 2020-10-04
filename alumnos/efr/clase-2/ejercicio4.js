// Crear una función que reciba un divisor y un limite y devuelva el mayor 
// número divisible por divisor menor que limite. Ambos valores serán siempre 
// enteros positivos.

const getBiggestMultiple = (divider, limit) => {
    let result = limit - 1

    while (result % divider !== 0) {
        result--
    };

    return result
}

getBiggestMultiple(5, 20)