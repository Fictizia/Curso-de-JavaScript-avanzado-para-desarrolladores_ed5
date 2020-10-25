/*
# Ejercicio 6:
Tengo algunos traumitas con los números. No muchos, pero los tengo. Pero no acaba ahí, depende del día de la semana mi trauma cambia:
-Los lunes odio el 12.
-Los martes odio los números mayores de 95.
-Los miércoles odio el 34.
-Aborrezco el 0 en jueves.
-En viernes odio los números pares.
-Ni me hables del 56 en sábado.
-El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)

Escribir una función que reciba el día de la semana como cadena de texto y un número y me recuerde si hoy odio ese número o no
*/

const estadosDeHumor = (dia, numero) => {

  let numeroOdiado;
  
  // números concretos
  switch(dia) {
      case 'lunes':
        numeroOdiado = 12;
        break;
      case 'miércoles':
        numeroOdiado = 34;
        break;
      case 'jueves':
        numeroOdiado = 0;
        break;
      case 'sábado':
        numeroOdiado = 56;
        break;
    }
  
  // rangos de números
  const comprobarDia = () => {
    switch(dia) {      
      case 'martes':
        return numero > 95 ? true : false;
      case 'viernes':
        return Number.isInteger(numero / 2) ? true : false;
      case 'domingo':
        return numero === 666 || numero === -666 ? true : false;
    }
  }
  
  return (numeroOdiado === numero || !!comprobarDia()) 
  ? 'Lo siento. Hoy será un mal día :(' 
  : 'Hoy será un gran día :)';
}

estadosDeHumor('domingo', 66);