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