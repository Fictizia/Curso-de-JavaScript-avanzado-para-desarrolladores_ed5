//Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.
    function ponPrimeraMayuscula(str) {
        var splitStr = str.split(' ');
        let result= '';
        for (const palabra of splitStr) {
            result = `${palabra[0].toUpperCase()}${palabra.slice(1).toLowerCase()}`
            console.log(result);
        }
        return result;
      
      }
console.assert(ponPrimeraMayuscula("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme")