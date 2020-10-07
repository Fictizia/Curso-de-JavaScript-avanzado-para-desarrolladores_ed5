// Crear una función que recibe dos números y un operador 
// (su nombre como string) y que devuelve el resultado de aplicar 
// dicha operación a los dos números proporcionados.

const doOperation = (number1, number2, operation) => {
    switch(operation){
        case 'add':
            return number1 + number2;
        case 'subtract':
            return number1 - number2;
        case 'multiply':
            return number1 * number2; 
        case 'divide':
            return number1 / number2;  
        default:
            return "I don't know what you want"
    }
}

doOperation(5,2,'add')
doOperation(5,2,'subtract')
doOperation(5,2,'multiply')
doOperation(5,2,'divide')
doOperation(5,2,'module')


