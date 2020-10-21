/*
* Ejercicio: 8. Crear una expresión regular que valide que un DNI/NIE tiene formato válido. Un DNI se compone de 8 números seguidos de una letra mayúscula. Un NIE se compone de un primer caracter que puede ser X,Y o Z seguido de 7 números y acaba en una letra mayúscula. Puede llevar o no un guión antes de la última letra.
*/

const regexp = /^([xyz](\d){7}|\d{8})-?[a-z]$/gi


console.assert( regexp.test('F2345678-Y'), false ); //no es una X Y o Z

console.assert( regexp.test('X2345678-Y'), true ); 

console.assert( regexp.test('05123456-Y'), true); 

console.assert( regexp.test('051F3456-Y'), false ); // no hay letras entremedias

console.assert( regexp.test('X0513456'), false ) // falta la letra del final
