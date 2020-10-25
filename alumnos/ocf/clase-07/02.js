// 2. Crear una función que recibe un string y devuelva si contiene o no una vocal.

const fnc = str => {
  const regex = /[aeiou]/i;
  const check = str.match(regex) ? true : false;
  console.log(check);
}

fnc('texto');