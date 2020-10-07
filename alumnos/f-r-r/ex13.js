//Crea una función que reciba un string y lo devuelva en camelCase
function camelize(str) {
    return str.split(' ').map(function(word,i){
        if(i == 0){
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join('');
}

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");