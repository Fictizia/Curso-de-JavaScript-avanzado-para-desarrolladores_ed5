/*
Lo que yo hice:

function pairOdd(num) {
  if(num % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}
pairOdd(2);


function pairOdd(num) {
	return num%2 == 0 ? true : false;
}
pairOdd(3);
*/

// solucion sencilla:
function esPar (numero) {
  return numero % 2 === 0;
}