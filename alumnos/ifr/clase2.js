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

// Esta solución usa eval que al parecer es el demonio, NO VÁLIDA
// const operations = {
//     suma: '+',
//     resta: '-',
//     multiplicacion: '*',
//     division: '/'
// }

// const getResult = (num1, num2, operation) => eval(`${num1}${operations[operation]}${num2}`);


const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;
const error = () => 'Operación no contemplada, se admiten: suma, resta, multiplicación, división';

const getOperation = operator => {
    switch(operator){
        case 'suma':
            return suma;
        case 'resta':
            return resta;
        case 'multiplicación':
            return multiplicacion;
        case 'división':
            return division;
        default: 
            return error;
    }
}

/**
 * 
 * @param a number
 * @param b number 
 * @param operation string que puede tomar valores: suma, resta, multiplicación o división
 */

const getResult = (a, b, operation) => getOperation(operation)(a, b);



//Ejercicio 4
// Maximo múltiplo de divisor menor que el límite
const getResutl = (divisor, limit) => {
    for(let i = limit; i>0; i--){
        console.log({i})
        if(i%divisor === 0) {
            return i;
        }
    }
}

const getMaxMultipleOfDivisorLowerThanLimit = (divisor,limit) => {
    const resto = limit % divisor;
    return limit-resto;
}


//Ejercicio 5

/**
 * 
 * @param {*} velocidadCrecimiento entero positivo unidades = (uds crece al día) Ej metros que crece al día
 * @param {*} velocidadDecrecimiento entero positivo unidades = (uds decrece al día)
 * @param {*} alturaDeseada entero positivo unidades = uds (m,km..)
 */

const getDays =  (velocidadCrecimiento,velocidadDecrecimiento,alturaDeseada ) => {
    if(velocidadDecrecimiento >= velocidadCrecimiento) return 'Jamás alcanzará la altura deseada';
    if(alturaDeseada < 0) return 'Altura imposible';
    if(alturaDeseada === 0) return 0;

    let alturaAlcanzada = 0; // 0 uds (m,km)
    let diasPasados = 0;
    let estaCreciendo = true;  //Nace por el día
    let crecimiento;
    while(alturaAlcanzada < alturaDeseada){
        if(estaCreciendo){
            crecimiento = velocidadCrecimiento;
            diasPasados = diasPasados+1;
        }
        else {
            crecimiento = -velocidadDecrecimiento;
        }
        estaCreciendo = !estaCreciendo;
        alturaAlcanzada = alturaAlcanzada + crecimiento;
    }
    return diasPasados;
    
}

//getDays(3,1,11) // 5
//getDays(3,1,10) // 5
//getDays(3,1,12) // 6

//Ejercicio 6
const doIhate = (day,number) => {
    const hatedDaysPerDay = {
        'Lunes': 12,
        'Miércoles': 34,
        'Jueves': 0,
        'Sábado': 56,
    };

    switch(day){
        case 'Martes':
            return number > 95;
        case 'Viernes':
            return number % 2 === 0;
        case 'Domingo':
            return Math.abs(number) === 666;
        case 'Lunes':
        case 'Miércoles':
        case 'Jueves':
        case 'Sábado':
            return hatedDaysPerDay[day] === number;
        default:
            'No es un día válido'
    }
}