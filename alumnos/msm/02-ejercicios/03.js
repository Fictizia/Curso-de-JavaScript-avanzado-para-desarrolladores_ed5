"use strict";

// Crear una función que recibe dos números y un operador (su nombre como string) y que devuelve el resultado de aplicar dicha operación a los dos números proporcionados.

function calculator(n1, n2, op) {
  switch (op) {
    case "suma":
      return n1 + n2;
    case "resta":
      return n1 - n2;
    case "producto":
      return n1 * n2;
    case "división":
      return n1 / n2;
    default:
      return "What are you trying to do?";
  }
}

console.log(calculator(2, 2, "suma"));
console.log(calculator(2, 2, "resta"));
console.log(calculator(3, 2, "producto"));
console.log(calculator(6, 2, "división"));
console.log(calculator(2, 2, "holi"));
