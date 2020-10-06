/* 8. Crea una función que reciba un número y devuelva un string con formato ordinal inglés. Esto es:
- acaba en 1 --> 301st
- acaba en 2 --> 302nd
- acaba en 3 --> 303rd
- cualquier otra cosa --> 300th
*/

const ordinal = num => {
  
  const stringNumber = num.toString();
  
  switch (stringNumber[stringNumber.length - 1]) {
    case '1':
      return `${stringNumber}st`;
    case '2':
      return `${stringNumber}nd`;
    case '3':
      return `${stringNumber}rd`;
    default:
      return `${stringNumber}th`;
  }
}

ordinal(121);