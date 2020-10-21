/*
 *9. Crear una función que valide que una URL es correcta. Vamos a asumir que las urls pueden contener caracteres alfanuméricos, guiones y puntos.

 */

 const regexp = /^https?:\/\/(\w)+[.-]*?(\w)*?.(com|es)/gi


console.assert( regexp.test('https://es.stackoverflow.com'), true ); 

console.assert( regexp.test('http://es.stackoverflow.com'), true ); 

console.assert( regexp.test('es.stackoverflow.com'), false); 

console.assert( regexp.test('https://es.stackoverflow'), false ); 

console.assert( regexp.test('https:es.stackoverflow.com/'), false ) 