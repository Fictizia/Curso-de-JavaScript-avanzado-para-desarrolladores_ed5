/*
# Ejercicio 2:
Crear una función que reciba un número entero positivo y devuelva true si dicho número es par o false en caso contrario.
*/

const checkNumber = (num) => {
    return Number.isInteger(num / 2) ? true : false;
}

checkNumber(33);