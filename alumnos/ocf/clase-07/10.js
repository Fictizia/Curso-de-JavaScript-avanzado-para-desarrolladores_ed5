// 10. Crear una función que valide que el formato de una contraseña es válido. Un contraseña debe contener...

const fnc = password => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W\D])[a-zA-Z0-9\W\D]{8,16}$/g;
    const checkRegex = password.match(regex) ? true : false;
    console.log(checkRegex);
}

fnc('nBÑ4567€'); // true
fnc('Axçld03∆'); // true
fnc('1l0jC/sD3c+a¥∂16'); // true

fnc('aN2ñ');     // false
fnc('asdDDFsf'); // false
fnc('123*#@!!'); // false
fnc('1l0D3jC*sD3c#!?17'); // false