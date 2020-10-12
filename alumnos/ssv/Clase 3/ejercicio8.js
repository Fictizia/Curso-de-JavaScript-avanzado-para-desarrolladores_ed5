// 8. Crea una función que reciba un número y devuelva un string con formato ordinal inglés. Esto es:
// acaba en 1 --> 301st

// acaba en 2 --> 302nd

// acaba en 3 --> 303rd

// cualquier otra cosa --> 300th

const getSufix = (num) => {
  const lastNum = num.toString().slice(-1);
  if (lastNum === '1') {
    return 'st';
  } else if (lastNum === '2') {
    return 'nd';
  } else if (lastNum === '3') {
    return 'rd';
  } else {
    return 'th';
  }
};

const englishNumber = (num) => {
  const numStr = num.toString();

  return numStr + getSufix(numStr);
};

console.assert(englishNumber(300) === '300th');
console.assert(englishNumber(301) === '301st');
console.assert(englishNumber(302) === '302nd');
console.assert(englishNumber(303) === '303rd');