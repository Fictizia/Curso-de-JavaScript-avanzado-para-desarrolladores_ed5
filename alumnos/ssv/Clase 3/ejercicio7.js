// 7. Crea una función que reciba un string y lo devuelva en camelCase
const firstToCapital = (str) => {
  const splited = str.split(' ');
  let result = '';
  for (const word of splited) {
    result += `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
  }
  return result;
};

function camelize(string) {
  const allCamelize = firstToCapital(string);
  let firstToLow = allCamelize[0].toLowerCase() + allCamelize.slice(1);

  return firstToLow;
}
console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');
