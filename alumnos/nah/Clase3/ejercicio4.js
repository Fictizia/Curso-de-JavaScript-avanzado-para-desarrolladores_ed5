/*
* 4. Crea una función que reciba un string y un número n y devuelva el string repetido n veces:
*/

function repeat(str, n) {
    return str.repeat(n)
  }
  
  console.log(repeat('Batman ', 3))
  
  console.assert(repeat('Batman ', 3) === 'Batman Batman Batman ')