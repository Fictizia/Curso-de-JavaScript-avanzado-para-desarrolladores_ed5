// 7. Crear una función que utilice una expresión regular para identificar si el parametro str que recibe es una dirección MAC o no. Una dirección MAC se compone de 6 pares de caracteres hexadecimales separados por :.

const fnc = str => {
    const regex = /^([0-9a-f]){2}([:][0-9a-f]{2}){5}$/i;
    const checkRegex = str.match(regex) ? true : false;
    console.log(checkRegex);
}

fnc('01:32:54:67:89:AB'); // true
fnc('0132546789AB');      // false
fnc('01:32:54:67:89');    // false
fnc('01:32:54:67:89:ZZ'); // false
