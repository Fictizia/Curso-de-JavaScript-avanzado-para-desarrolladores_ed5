const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
const operateTwoNumbers = (num1, num2, operator) => {
  let result;
  const userOperator = removeAccents(operator).toLowerCase();
  switch (userOperator) {
    case "suma":
      result = num1 + num2;
      break;
    case "resta":
      result = num1 - num2;
      break;
    case "multiplicacion":
      result = num1 * num2;
      break;
    case "division":
      result = num1 / num2;
      break;
    default:
      result =
        "Debes introducir dos números y alguna de las siguientes operaciones: suma, resta, multiplicación o división.";
  }
  return result;
};

console.log(operateTwoNumbers(3, 3, "Multiplicación")); //return 9

console.log(operateTwoNumbers(2, 76, "SUMA")); //return 9

console.log(operateTwoNumbers(3, 3, "cuadrado")); // return error string
