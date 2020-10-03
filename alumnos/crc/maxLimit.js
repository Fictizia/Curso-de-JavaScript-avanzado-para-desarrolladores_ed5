// 4. Crear una función que reciba un divisor y un limite y devuelva el mayor número 
// divisible por divisor menor que limite. Ambos valores serán siempre enteros positivos.

const maxLimit = (divisor, limit) => limit - (limit % divisor);
