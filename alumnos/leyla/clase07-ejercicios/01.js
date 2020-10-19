// Que pesado Aquaman. No sabemos cómo hacer para que deje tranquilos a los miembros de la Liga de la Justicia. Ha comenzado a entrar usando variaciones de su nombre: aQuaman, AQUAMAN, aquaman... Crear una función que reciba un listado de héroes como strings y devuelva la posición del array en la que está Aquaman o un -1 si no estuviera.

const aquamanRegex = /aquaman/gi;
const heroes = ['batman', 'superman', 'flash', 'cyborg', 'Aquaman'];
const heroes2 = ['Robin', 'Beast Boy', 'Raven', 'Cyborg', 'Starfire'];

function notAquaman(array) {
    for(let i = 0; i < array.length; i+=1) {
        if(aquamanRegex.test(array[i])) {
            return i;
        }
    }
    return -1;
}

console.info(notAquaman(heroes)); // 4
console.info(notAquaman(heroes2)); // -1

