// 3. Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos (Teorema de pitagoras).

function hipotenusa(c1, c2) {
  return Math.sqrt(c1 ** 2 + c2 ** 2);
}
console.assert(hipotenusa(1, 2) === 2.23606797749979);
