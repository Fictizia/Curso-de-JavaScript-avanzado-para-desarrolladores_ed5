// 6. Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.

function ponPrimeraMayuscula(str) {
  let strArray = str.split(' ');
  let newArray = [];
  let finalStr;
  for (word of strArray) {
    let capital = word[0].toUpperCase();
    let others = word.slice(1);
    newArray.push(capital.concat(others));
    finalStr = newArray.join(' ');
  }

  return finalStr;
}

console.assert(
  ponPrimeraMayuscula('En un lugar de la Mancha de cuyo nombre no quiero acordarme') === 'En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme'
);
