// 3. Que pesado Aquaman. No sabemos cómo hacer para que tranquilos a los miembros de la Liga de la Justica. Ha comenzado a entrar usando variaciones de su nombre: aQuaman, AQUAMAN, aquaman... Crear una función que reciba un listado de héroes como strings y devuelva la posición del array en la que está Aquaman o un -1 si no estuviera.

const heroes = ['batman', 'superman', 'flash', 'cyborg', 'aquaman']

const fnc = arr => {
  console.log(arr.indexOf('aquaman'));
}

fnc(heroes);