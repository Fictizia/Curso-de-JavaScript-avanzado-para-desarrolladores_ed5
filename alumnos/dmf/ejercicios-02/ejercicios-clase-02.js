/**
 * Dado un array de números enteros positivos desordenados, devolver otro array con los números ordenados.
 */

let numPositivos = [5, 8, 3, 14, 99, 1, 55];

for (let i = 0; i < numPositivos.length; i++) {
    let num = numPositivos[i];

    for (var j = i - 1; j >= 0 && (numPositivos[j] > num); j--) {
        numPositivos[j + 1] = numPositivos[j];
    };

    numPositivos[j + 1] = num;
};

/**
 * Crear una función que reciba un número entero positivo y devuelva true si dicho número es par o false en caso contrario.
 */

const comparaPositivo = number => number % 2 === 0;

/**
 * Crear una función que recibe dos números y un operador (su nombre como string) y 
 * que devuelve el resultado de aplicar dicha operación a los dos números proporcionados.
 */
const operaciones = (num1, num2, operador) => {
    switch (operador) {
        case 'suma':
            return num1 + num2
        case 'resta':
            return num1 - num2
        case 'division':
            return num1 / num2
        case 'multiplicacion':
            return num1 * num2
        case 'potencia':
            return num1 ** num2
        case 'resto':
            return num1 % num2
        default:
            return 'No se puede realizar esa operación'
    };
};

/**
 * Crear una función que reciba un divisor y un limite y devuelva el mayor número divisible por
 * divisor menor que limite. Ambos valores serán siempre enteros positivos.
 */

const maxDivisor = (divisor, limite) => {
    for (let i = limite; i > 0; i--) {
        if (i % divisor === 0) {
            return i;
        }
    };
};
maxDivisor(4, 10)

/**
 * Cada día una planta crece en metros en base a su velocidadCrecimiento. Cada noche, dicha planta decrece 
 * en metros en base a su velocidadDecrecimiento debido a la falta de sol. Cuando nace, mide exactamente 
 * 0 metros. Queremos saber los días que tardará una planta en alcanzar cierta alturaDeseada. 
 * Crear una función que reciba velocidadCrecimiento, velocidadDecrecimiento y alturaDeseada como números 
 * enteros positivos y devuelva el número de días que tardará la planta en medir la alturaDeseada.
 */

const factorCrecimiento = (velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) => {
    let alturaPlanta = 0;
    let dias = 0;

    while (alturaPlanta < alturaDeseada) {
        alturaPlanta += velocidadCrecimiento;
        alturaPlanta -= velocidadDecrecimiento;

        dias += 1;
    };
    return dias
};
factorCrecimiento(5, 2, 20)
factorCrecimiento(3, 1, 30)


/**
 * Tengo algunos traumitas con los números. No muchos, pero los tengo. Pero no acaba ahí, 
 * depende del día de la semana mi trauma cambia:
 * 
 * Los lunes odio el 12.
 * Los martes odio los números mayores de 95.
 * Los miércoles odio el 34.
 * Aborrezco el 0 en jueves.
 * En viernes odio los números pares.
 * Ni me hables del 56 en sábado.
 * El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)
 * 
 * Escribir una función que reciba el día de la semana como cadena de texto y un número y 
 * me recuerde si hoy odio ese número o no
 */

const numeroOdiado = (dia, numero) => {
    let mensajeOdio = 'Lo siento hoy no es tu dia, mejor quedate en la cama';

    switch (dia) {
        case 'lunes':
            if (numero === 12) {
                return mensajeOdio
            }
        case 'martes':
            if (numero === 95) {
                return mensajeOdio
            }
        case 'miercoles':
            if (numero === 34) {
                return mensajeOdio
            }
        case 'jueves':
            if (numero === 0) {
                return mensajeOdio
            }
        case 'viernes':
            if (numero % 2 === 0) {
                return mensajeOdio
            }
        case 'sabado':
            if (numero === 56) {
                return mensajeOdio
            }
        case 'domingo':
            if (numero === 666 || numero === -666) {
                return mensajeOdio
            }
        default:
            return 'Empiezas el dia con buen pie, a por todas!!';
    };
};