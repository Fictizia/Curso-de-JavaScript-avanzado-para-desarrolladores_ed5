// 8.  Crear una expresión regular que valide que un DNI/NIE tiene formato válido. Un DNI se compone de 8 números seguidos de una letra mayúscula. Un NIE se compone de un primer caracter que puede ser X,Y o Z seguido de 7 números y acaba en una letra mayúscula. Puede llevar o no un guión antes de la última letra.


function dniValidador(str) {
const regexp = /[\dX-Z][\d]{7}[-]?[A-Z]/;
return regexp.test(str)
}

console.log(dniValidador('02887363-T'));
console.log(dniValidador('Y9826582P'));