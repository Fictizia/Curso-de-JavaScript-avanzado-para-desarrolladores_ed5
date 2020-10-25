// 7. Crea una función que reciba un string y lo devuelva en camelCase

const camelize = str => {
  const words = str.split(' ');
  let result  = '';
  
  // convertir a UpperCamelCase
  for (const word of words) {
    result += word[0].toUpperCase() + word.slice(1);
  } // 'HolaATodosQueTal'
  
  // convertir a lowerCamelCase
  result = result[0].toLowerCase() + result.slice(1);
  
  return result;
}

camelize("Hola a todos que tal");
// 'holaATodosQueTal'
