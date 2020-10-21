/*
3- Crear una función que recibe dos números y un operador (su nombre como string) y que devuelve el resultado de aplicar dicha operación a los dos números proporcionados. 
*/

let num1 = 2
let num2 = 4
let oper = "/";

const doOperation = (number1, number2, operation) => {

  switch(operation){
    case "+":
            return number1+number2;
    case "-":
            return number1-number2;
    case "*":
            return number1*number2;
    case "/":
            return number1/number2;
    default:
      throw new Error("Invalid operator");
  }
}

doOperation(num1, num2, oper);
