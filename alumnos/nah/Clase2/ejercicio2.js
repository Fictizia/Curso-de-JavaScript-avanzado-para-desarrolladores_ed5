/*
2- Crear una función que reciba un número entero positivo y devuelva true si dicho número es par o false en caso contrario    
*/

let number = 3;

const checkData = (num) => {
  if(Number.isInteger(num) === false || num < 0){
    throw new Error("The number does not follow the rules");
  }
}

const isPositive = (num) => {

  checkData(num);
  
  if (num % 2 === 0) {
      return true; 
    }else {
      return false;
  }
} 
  
isPositive(number);