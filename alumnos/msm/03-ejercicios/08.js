// Crea una función que reciba un número y devuelva un string con formato ordinal inglés. Esto es:

function devuelveOrdinal(num) {
    let last = num % 10;
    if (last === 1) {
      return num + "st";
    } else if (last === 2) {
      return num + "nd";
    } else if (last === 1) {
      return num + "rd";
    } else {
      return num + "th";
    }
  }
  
  console.log(devuelveOrdinal(7));
  console.log(devuelveOrdinal(2));
  console.log(devuelveOrdinal(1));
  console.log(devuelveOrdinal(3));