/*
# Ejercicio 3:
Crear una función que recibe dos números y un operador (su nombre como string) y que devuelve el resultado de aplicar dicha operación a los dos números proporcionados.
*/

const fnc = (a, b, op) => {
    switch(op) {
      case 'addition':
        return a + b;
        break;
      case 'substraction':
        return a - b;
        break;
      case 'multiplication':
        return a * b;
        break;
      case 'division':
        return a / b;
        break;
      case 'modulo':
        return a % b;
        break;
      case 'exponentiation':
        return a ** b;
        break;
    }
  }
  
  fnc(12, 2, 'modulo');