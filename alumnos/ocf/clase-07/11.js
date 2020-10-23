// 11. Crear una función que lea una frase y devuelva la palabra más larga que contenga, al menos, una mayúscula.

const fnc = str => {
    let resultado = [];
    const fraseArr = str.split(' ');
    let palabras = fraseArr.filter(x => x.match(/[A-Z]/));
    
    for (const palabra of palabras) {   
        resultado[palabra.length] = palabra;
    }

    return resultado[resultado.length - 1];
}

fnc('En un lugar de la Mancha de cuyo nombre no quiero acordarme, vivía no hace...');
// Mancha

fnc('Una tarde extremadamente calurosa de principios de julio, un joven salió...');
// Una

fnc('Era un día luminoso y frío de abril y los relojes daban las trece...');
// Era

fnc('Alguien tenía que haber calumniado a Josef K, pues fue detenido una mañana...');
// Alguien