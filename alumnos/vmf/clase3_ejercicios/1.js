/* Crea una función que devuelva el perímetro de un círculo a partir de su radios: */ 
// 2PIr
function perimetroCirculo(r) {
    // 2*pi*r = pi*D;
    return Math.PI * r * 2;
}

perimetroCirculo(3);

// console.assert(perimetroCirculo(3) === 18.84955592153876)
// console.assert(perimetroCirculo(6) === 37.69911184307752)