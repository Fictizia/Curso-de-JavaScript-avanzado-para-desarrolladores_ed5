function aplicarOperacion(num1, num2, operador) {
    operador = operador.toLowerCase();

    switch(operador) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "producto":
            return num1 * num2;
        case "division":
            return num1 / num2;
        case "potencia":
            return num1 ** num2;
        case "modulo":
            return num1 % num2;
        default:
            return "No se reconoce el operador. Inténtelo nuevamente con otro valor."
    }
}

console.info(aplicarOperacion(2, 3, "Suma")); // 5
console.info(aplicarOperacion(6, 3, "resta")); // 3
console.info(aplicarOperacion(6, 3, "algo")); // "No se reconoce el operador. Inténtelo nuevamente con otro valor."
