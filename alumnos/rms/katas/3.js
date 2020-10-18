function calculate(a,b,operation) {
  switch (operation) {
    case 'suma':
      return a + b;
      break;
    case 'resta':
      return a - b;
      break;
    case 'multiplicacion':
      return a * b;
      break;
    case 'division':
      return a / b;
      break;
  }
}
calculate(1,2,'suma');
