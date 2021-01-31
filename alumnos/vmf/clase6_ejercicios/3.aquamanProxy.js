/*Que pesado Aquaman. No sabemos cómo hacer para que tranquilos a los miembros de
la Liga de la Justica. Ha comenzado a entrar usando variaciones de su nombre: aQuaman,
AQUAMAN, aquaman... Crear un listado de heroes heroes que lance una excepción cada vez
que intenten añadir a dicho array cualquier variación de 'Aquaman'.*/

let heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman'];

const manejador = {
    set: (objeto, propiedad, valor) => {
      console.log("objeto", objeto); // (5) []
      console.log("propiedad", propiedad); // 5
      console.log("valor", valor); // aquaman
      if (typeof valor === 'string' && valor.toLowerCase() === 'aquaman') {
            throw new Error('¡Que Aquaman no entra más leches!');
        }
      return Reflect.set(objeto, propiedad, valor);
    }
}

const intermediario = new Proxy(heroes, manejador);

intermediario.push('aquaman');
intermediario.push('cacaman');
