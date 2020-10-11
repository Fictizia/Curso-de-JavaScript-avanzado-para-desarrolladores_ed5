// 3. Crear una función que recibe dos números y un operador (su nombre como string) y 
// que devuelve el resultado de aplicar dicha operación a los dos números proporcionados.

const doOperation = (firstNumber, secondNumber, operator) => {
  const operators = {
    '+': firstNumber + secondNumber,
    '-': firstNumber - secondNumber,
    '*': firstNumber * secondNumber,
    '**': firstNumber ** secondNumber,
    '/': firstNumber / secondNumber
  }
  return operators[operator] ? operators[operator] : 'This operator not exist';
}