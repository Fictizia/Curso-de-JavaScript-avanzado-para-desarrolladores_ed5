//Crea una función que devuelva el perímetro de un círculo a partir de su radios:
// 2PIr
function perimetroCirculo(r) {
  return 2 * (Math.PI * r); // return 2 * Math.PI * r; es válido sin paréntesis
}
perimetroCirculo(r);


console.assert(perimetroCirculo(3) === 18.84955592153876)
console.assert(perimetroCirculo(6) === 37.69911184307752)


//Crea una función que devuelva el area de un círculo a partir de su radio:
function areaCirculo(r) {
  // πr^2
  return Math.PI * Math.pow(r, 2);

}
areaCirculo(r);

console.assert(areaCirculo(2) === 12.566370614359172)
console.assert(areaCirculo(8) === 201.06192982974676)


//Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos (Teorema de pitagoras).

// h^2 = c1^2 + c2^2
function hipotenusa(c1, c2) {
  return Math.sqrt((c1 ** 2) + (c2 ** 2));
}
hipotenusa(c1, c2);
console.assert(hipotenusa(1, 2) === 2.23606797749979)

// otra forma de resolverlo:
function hipotenusa(c1, c2) {
  return Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2));
}