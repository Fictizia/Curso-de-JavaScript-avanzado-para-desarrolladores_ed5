// 5. Crea una función que reciba una frase como string y devuelva la palabra más larga:

function palabraMasLarga(str) {
  const arryStr = str.split(' ');
  let longestWord = '';
  for (let word of arryStr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');
