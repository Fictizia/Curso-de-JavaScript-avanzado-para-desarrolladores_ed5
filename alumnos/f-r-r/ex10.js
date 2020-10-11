//Crea una función que reciba un string y un número n y devuelva el string repetido n veces:
function copy(str, n) {
    return str.repeat(n);
}

console.assert(copy('Batman ', 3) === 'Batman Batman Batman ')