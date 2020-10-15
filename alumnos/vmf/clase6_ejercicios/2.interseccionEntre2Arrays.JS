/* Crear una función que reciba dos arrays y devuelva la intersección
de los dos (los elementos que estén entre los dos)
sin repeticiones. */

// Salida
// [1,3,5,9]

const arrayA = [1,2,3,1,4,5,9];
const arrayB = [1,3,5,5,9,10];

function intersection(a, b) {
    const noRepA = [...new Set(a)];
    const noRepB = [...new Set(b)];
    const result = noRepA.filter(e => {
        return noRepB.indexOf(e) !== -1
    });
    console.log(result);
}

intersection(arrayA, arrayB);