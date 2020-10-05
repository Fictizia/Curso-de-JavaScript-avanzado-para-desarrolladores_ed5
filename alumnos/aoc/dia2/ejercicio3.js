const calculator = (n1,n2,operator) => {
  let number;
    if(operator === 'add') {
      number = n1 + n2;
    } else if (operator === 'subtract') {
      number = n1 - n2;
    } else if (operator === 'multiply') {
      number = n1 * n2;
    } else {
      number = n1 / n2;
    }
    return number;
}


console.log(calculator(2,2,"multiply"));

// Un switch al ser 4 condiciones hubiera sido una mejor opción...
