//Crea una función que reciba un string y un número n y devuelva el string repetido n veces:
function repeat(str, n) {
  return str.repeat(str * n);
}
//otra forma de resolverlo:
function repeat(str, n) {
  var result = '';
  for (var i = 0; i < n; i++) {
    result += str;
  }
  return result;
}
console.assert(repeat('Batman ', 3) === 'Batman Batman Batman ')



//Crea una función que reciba una frase como string y devuelva la palabra más larga:
function palabraMasLarga(str) {
  const separado = str.split(' ');
  let palabraMasLarga;
  for (const palabra of separado) {
    if (palabra.length > palabraMasLarga.lenth) {
      palabraMasLarga = palabra
    }
  }
  return palabraMasLarga;
}
console.assert(palabraMasLarga("Erase una vez que se era") === "Erase")
  //otra forma de hacerlo:
function palabraMasLarga(str) {
  let x = str.split(' ');
  return (x.sort(function(a, b) { return b.length - a.length; })[0]);
}


//Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.
function ponPrimeraMayuscula(str) {
  const separado = str.split(' ');
  let resultado = '';
  for (const palabra of separado) {
    resultado = `${palabra[0].toUpperCase()}${palabra.slice(1).toLowerCase()}`;
  }
  return resultado;
}

console.assert(ponPrimeraMayuscula("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme")


//Crea una función que reciba un string y lo devuelva en camelCase
function camelize(str) {
  let resultado = '';
  for (const palabra of resultado) {
    resultado = `${palabra[0].toUpperCase()}${palabra.slice(1).toLowerCase()}`;
  }
  return resultado;
}

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");