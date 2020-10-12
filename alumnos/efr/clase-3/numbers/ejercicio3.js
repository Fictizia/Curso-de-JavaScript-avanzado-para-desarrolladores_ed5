// Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos (Teorema de pitagoras).
// h^2 = c1^2 + c2^2

function hipotenusa(c1, c2) {
    return Math.sqrt((c1**2) + (c2 ** 2))
}

console.log(hipotenusa(1, 2) === 2.23606797749979)

