//Crea una función que reciba una frase como string y devuelva la palabra más larga:
function palabraMasLarga(str) {
    let x = str.split(' ');
   return (x.sort(function (a, b) { return b.length - a.length; })[0]);
}
palabraMasLarga("Erase una vez que se era");
console.assert(palabraMasLarga("Erase una vez que se era") === "Erase")
