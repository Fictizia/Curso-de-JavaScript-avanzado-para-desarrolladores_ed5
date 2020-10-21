/*
 *Crear una función que valide que el formato de una contraseña es válido. Un contraseña debe contener:
 
 Entre 8 y 16 caracteres
 Al menos una letra minúscula
 Al menos una letra mayúscula
 Al menos un número
 Puede contener símbolos no alfanuméricos. 
*/


const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W?)(?=.{8,16}$).*$/g

console.assert( regexp.test('gR7<`(hj'), true ); 

console.assert( regexp.test('e2Ej7sGw_UTx;'), true ); 

console.assert( regexp.test('ywr,:3V>)^,Cz23?4o'), false ); //mas larga de 16

console.assert( regexp.test('https:es.stackoverflow.com/'), false ) 