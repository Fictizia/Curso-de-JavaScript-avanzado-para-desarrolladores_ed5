// Tengo algunos traumitas con los números. No muchos, pero los tengo. 
// Pero no acaba ahí, depende del día de la semana mi trauma cambia:

// Los lunes odio el 12.
// Los martes odio los números mayores de 95.
// Los miércoles odio el 34.
// Aborrezco el 0 en jueves.
// En viernes odio los números pares.
// Ni me hables del 56 en sábado.
// El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)
// Escribir una función que reciba el día de la semana como cadena de texto y un número 
// y me recuerde si hoy odio ese número o no

const getNumberHate = (day, number) => {
    let hate = false

    switch(day){
        case 'monday':
            hate = number === 12
            break;
        case 'tuesday':
            hate = number > 95
            break;
        case 'wednesday':
            hate = number === 34
            break;
        case 'thursday':
            hate = !number
            break;
        case 'friday':
            hate = number % 2 === 0
            break;
        case 'saturday':
            hate = number === 56
            break;
        case 'saturday':
            hate = number === 56
            break;
        // sunday
        default:
            hate = number === 666 || number === -666
    }
        
    return `Today is ${day}, and you${hate ? ' ' : ' don\'t '}hate the number ${number}`
}

getNumberHate('monday', 12)
getNumberHate('tuesday', 34)
getNumberHate('tuesday', 95)
getNumberHate('wednesday', 35)
getNumberHate('thursday', 0)
getNumberHate('friday', 10)
