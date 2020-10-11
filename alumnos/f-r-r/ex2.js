//2- Crear una función que reciba un número entero positivo y devuelva true si dicho número es par o false en caso contrario.
const ex2 = (x)=>{
    if(!x%2){
        console.log(`${x} es par`);
        return true;
    }else{
        console.log(`${x} es impar`);
        return false;
    }
    }
    ex2(3);
    ex2(4);