/** 
 * 6.Tengo algunos traumitas con los números. No muchos, 
 * pero los tengo. Pero no acaba ahí, depende del día de la semana mi trauma cambia:

- Los lunes odio el 12.
- Los martes odio los números mayores de 95.
- Los miércoles odio el 34.
- Aborrezco el 0 en jueves.
- En viernes odio los números pares.
- Ni me hables del 56 en sábado.
- El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)

Escribir una función que reciba el día de la semana como
 cadena de texto y un número y me recuerde si hoy odio ese número o no
*/


const hateNumbers = (day, number) => {
  const killHuman = 'Kill human';
  const peaceDay = 'Peace day';
  const daysOfWeek = {
    friday: () => number % 2 === 0 ? killHuman : peaceDay,
    saturday: () => number === 56 ? killHuman : peaceDay,
    sunday: () => number === 666 || number === -666 ? killHuman : peaceDay,
    monday: () => number === 12 ? killHuman : peaceDay,
    tuesday: () => number > 95 ? killHuman : peaceDay,
    wednesday: () => number === 34 ? killHuman : peaceDay,
    thursday: () => number === 0 ? killHuman : peaceDay,
  }
  return daysOfWeek[day] ? daysOfWeek[day]() : 'This day not exist';
}