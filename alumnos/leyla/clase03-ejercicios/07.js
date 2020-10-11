// Crea una función que reciba un string y lo devuelva en camelCase
function camelize(str) {
    let aux = str.split(' ');
    let nueva = '';
    for(let i = 0; i < aux.length; i++) {
        if(i === 0) {
            nueva += aux[i].toLowerCase()
        } else {
            nueva += aux[i].charAt(0).toUpperCase() + aux[i].slice(1);
        }
    }
    return nueva;
}

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");

console.info(camelize("Hola a todos que tal"));