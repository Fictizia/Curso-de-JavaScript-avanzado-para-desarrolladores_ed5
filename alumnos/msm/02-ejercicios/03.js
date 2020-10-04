"use strict";

// Crear una función que recibe dos números y un operador (su nombre como string) y que devuelve el resultado de aplicar dicha operación a los dos números proporcionados.

function calculator(n1, n2, op) {
  let operator = op.toLowerCase();
  switch (operator) {
    case "suma":
      return n1 + n2;
    case "resta":
      return n1 - n2;
    case "multiplicación":
      return n1 * n2;
    case "división":
      return n1 / n2;
    default:
      return "What are you trying to do?";
  }
}

console.log(calculator(2, 2, "SUMA"));
console.log(calculator(2, 2, "resta"));
console.log(calculator(3, 2, "Multiplicación"));
console.log(calculator(6, 2, "división"));
console.log(calculator(2, 2, "holi"));
