/*
6- Tengo algunos traumitas con los números. No muchos, pero los tengo. Pero no acaba ahí, depende del día de la semana mi trauma cambia:

    - Los lunes odio el 12.
    - Los martes odio los números mayores de 95.
    - Los miércoles odio el 34.
    - Aborrezco el 0 en jueves.
    - En viernes odio los números pares.
    - Ni me hables del 56 en sábado.
    - El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)
    
    Escribir una función que reciba el día de la semana como cadena de texto y un número y me recuerde si hoy odio ese número o no
    */

let day = "domingo";
let num = -666;

const checkData = (weekday, number) => {
  isWeekDay(weekday);
  isNumber(number);
};

const isWeekDay = (weekdayName) => {
  const weekDays = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
  ];
  if (weekDays.includes(weekdayName) === false) {
    throw new Error("Please select a correct weekday");
  }
};

const isNumber = (numberSelected) => {
  if (typeof numberSelected !== "number") {
    console.log(typeof numberSelected);
    throw new Error("Please pick a number");
  }
};

const doIHateIt = (weekday, number) => {
  checkData(weekday, number);

  switch (weekday) {
    case "lunes":
      return number === 12 ? "I hate this day" : "I don't hate this day";
    case "martes":
      return number > 95 ? "I hate this day" : "I don't hate this day";
    case "miercoles":
      return number === 34 ? "I hate this day" : "I don't hate this day";
    case "jueves":
      return number === 0 ? "I hate this day" : "I don't hate this day";
    case "viernes":
      return number % 2 === 0 ? "I hate this day" : "I don't hate this day";
    case "sabado":
      return number === 56 ? "I hate this day" : "I don't hate this day";
    case "domingo":
      return number === 666 || number === -666
        ? "I hate this day"
        : "I don't hate this day";
  }
};

doIHateIt(day, num);
