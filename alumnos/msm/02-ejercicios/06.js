"use strict";

// Tengo algunos traumitas con los números. No muchos, pero los tengo. Pero no acaba ahí, depende del día de la semana mi trauma cambia:

// Los lunes odio el 12.
// Los martes odio los números mayores de 95.
// Los miércoles odio el 34.
// Aborrezco el 0 en jueves.
// En viernes odio los números pares.
// Ni me hables del 56 en sábado.
// El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)
// Escribir una función que reciba el día de la semana como cadena de texto y un número y me recuerde si hoy odio ese número o no

function numberReaction(day, number) {
  let finalDay = day.toLowerCase();
  let answer;

  switch (finalDay) {
    case "lunes":
      number === 12
        ? (answer = `Todo mal, el ${finalDay} odio el ${number}`)
        : (answer = `Todo ok, el ${finalDay} no odio el ${number}`);
      break;
    case "martes":
      number > 95
        ? (answer = `Todo mal, el ${finalDay} odio los números mayores de 95`)
        : (answer = `Todo ok, el ${finalDay} no odio los números menores de 95`);
      break;
    case "miércoles":
      number === 34
        ? (answer = `Todo mal, el ${finalDay} odio el ${number}`)
        : (answer = `Todo ok, el ${finalDay} no  odio el ${number}`);
      break;
    case "jueves":
      number === 0
        ? (answer = `Todo mal, el ${finalDay} odio el ${number}`)
        : (answer = `Todo ok, el ${finalDay} no odio el ${number}`);
      break;
    case "viernes":
      number % 2 === 0
        ? (answer = `Todo mal, el ${finalDay} odio los pares`)
        : (answer = `Todo ok, el ${finalDay} no odio los impares`);
      break;
    case "sábado":
      number === 56
        ? (answer = `Todo mal, el ${finalDay} odio el ${number}`)
        : (answer = `Todo ok, el ${finalDay} no odio el ${number}`);
      break;
    case "domingo":
      number === 666 || number === -666
        ? (answer = `Todo mal, el ${finalDay} odio el ${number}`)
        : (answer = `Todo ok, el ${finalDay} no odio el ${number}`);
      break;

    default:
      answer = "¿Es esto un día, amigui?";
  }
  return answer;
}

console.log(numberReaction("DOMINGO", 666));
console.log(numberReaction("LUNES", 11));
