//6- Tengo algunos traumitas con los números. No muchos, pero los tengo. Pero no acaba ahí, depende del día de la semana mi trauma cambia:

// Los lunes odio el 12.
// Los martes odio los números mayores de 95.
// Los miércoles odio el 34.
// Aborrezco el 0 en jueves.
// En viernes odio los números pares.
// Ni me hables del 56 en sábado.
// El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)
// Escribir una función que reciba el día de la semana como cadena de texto y un número y me recuerde si hoy odio ese número o no
const odioMiExistencia = (dia, num)=>{
    switch(dia){
       case "Lunes":
            num === 12 ? console.log('Los lunes odio el 12') : console.log('Lunes tranquilo');
       break;
       case "Martes":
           num > 95 ? console.log('Los martes odio los números mayores de 95') : console.log('Martes tranquilo');
           break;
       case "Miercoles":
           num === 34 ? console.log('Los miércoles odio el 34') : console.log('Miercoles tranquilo');
           break;
       case "Jueves":
           num === 0 ? console.log('Aborrezco el 0 en jueves') : console.log('Jueves tranquilo');
       break;
       case "Viernes":
           (num%2) ? console.log('En viernes odio los números pares') : console.log('Viernes tranquilo');
       break;
       case "Sabado":
           num === 0 ? console.log('Ni me hables del 56 en sábado') : console.log('Sabado de farra de JS!!');
       break;
       case "Domingo":
           (num=== -666 || num === 666) ? console.log('El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)') : console.log('Domingo del señor');
       break;
       default:
           console.log('Ese dia no existe');
    }
   };
   odioMiExistencia('Domingo', -666);
   odioMiExistencia('Domingo', 13);