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

//Ejercicio 4

const getResutl = (divisor, limit) => {
    for(let i = limit; i>0; i--){
        if(i%divisor === 0) {
            return i;
            break; 
        }
    }
}

//Ejercicio 5

const getDays = (velocidadCrecimiento,velocidadDecrecimiento,alturaDeseada ) => {

}

const doIhate = (day,number) => {
    const hates = {
        'Monday': 12,
        'Wednesday': 34,
        'Thursday': 0,
        'Saturday': 56,
    }
    if(day==='Tuesday') return number>95;
    if(day==='Friday') return number % 2 === 0;
    if(day==='Sunday') return Math.abs(number) === 666
    return hates[day] === number;
}