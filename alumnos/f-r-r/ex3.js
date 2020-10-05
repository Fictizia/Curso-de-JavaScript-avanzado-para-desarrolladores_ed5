//3- Crear una función que recibe dos números y un operador (su nombre como string) y que devuelve el resultado de aplicar dicha operación a los dos números proporcionados.
const ex3 = (x , y , operador)=>{
    switch(operador) {
  case "Suma":
return x + y;
  case "Resta":
      return x - y;
  case "Multiplicacion":
      return x * y;
  case "Division":
      if(y == 0 ){
        return "Imposible dividir por cero, colega"
      }else{
        return x / y;
      };
  default:
     return;
}
};
console.log(ex3(1,2, "Suma"));
console.log(ex3(1,2, "Resta"));
console.log(ex3(1,2, "Multiplicacion"));
console.log(ex3(1,2, "Division"));