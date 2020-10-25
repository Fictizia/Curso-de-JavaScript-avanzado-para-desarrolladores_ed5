/*Crea una función que devuelva el area de un círculo a partir de su radio:*/ 
function areaCirculo(r) {
    // πr^2
    // return (Math.PI  ** 2) * radio
    return Math.PI * Math.pow(r,2);
  }
  
  areaCirculo(3);

 // console.assert(areaCirculo(2) === 12.566370614359172)
 // console.assert(areaCirculo(8) === 201.06192982974676)