//Ejercicio1

const sortArray = array => {
    return array.sort((a,b) => a-b)
}

const result1 = sortArray([-1,5,4]);
//result1 = [-1, 4, 5];


//Ejercicio2

const isEven = number => number % 2 === 0;
let result2 = isEven(2); //true
result2 = isEven(3); // false

//Ejercicio3

const operations = {
    suma: '+',
    resta: '-',
    multiplicacion: '*',
    division: '/'
}

const getResult = (num1, num2, operation) => eval(`${num1}${operations[operation]}${num2}`);