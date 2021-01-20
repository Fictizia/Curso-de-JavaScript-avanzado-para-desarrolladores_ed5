![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

## Clase 9

- Asincronía en JS
  - Promesas
  - Async/await

### Promesas

Las promesas llegaron con ES6. Son nueva clase que nos facilita la vida a la hora de manejar la asincronía en JS. Las promesas se crean con el constructor de la clase Promise. Este constructor recibe una función que recibe dos funciones de callback: `resolve` y `reject`. Cuando lo que ocurre dentro del código de la promesa sale bien, deberemos invocar al callback de resolve con los datos que nos interesen. En caso de que salga algo mal, invocaremos a la función reject proporcionando o no el error que se ha producido.

```javascript

const miPromesaQueSaleBien = new Promise((resolve) => {
  setTimeout(function() {
    resolve('Todo bien')
  }, 2000)
})

const laHeLiaoParda = new Promise((resolve, reject) => {
  // bla bla
  setTimeout(function() {
    reject(new Error('he mezclao ácido clorhídrico encima de sulfato de so…'))
  }, 2000)
})
```

Cuando una promesa se cumple, podemos acceder al resultado de la misma usando los métodos `.then()` y `.catch()`. Ambos métodos reciben una función de callback cuyos parámetros son los que hayamos pasado a resolve o reject.

```javascript
miPromesaQueSaleBien.then(function(result) {
  console.log(result);
})

laHeLiaoParda.catch(function(err) {
  console.log(err);
})
```

Ambos métodos devuelven a su vez una promesa, por lo que se pueden usar en la misma declaración de la promesa.

```javascript

const miPromesaQueSaleBien = new Promise((resolve) => {
  setTimeout(function() {
    resolve('Todo bien')
  }, 2000)
}).then(function(result) {
  console.log(result)
})

const laHeLiaoParda = new Promise((resolve, reject) => {
  // bla bla
  setTimeout(function() {
    reject(new Error('he mezclao ácido clorhídrico encima de sulfato de so…'))
  }, 2000)
})
.then(function() {
  console.log('Aquí no llego nunca');
})
.catch(function(err) {
  console.log(err);
})
```

Si el `then` devuelve algo, podemos usarlo para encadenar promesas. Incluso podemos ejecutar código asíncrono dentro:

```javascript

const miPromesaQueSaleBien = new Promise((resolve) => {
  setTimeout(function() {
    resolve('Todo bien')
  }, 2000)
}).then(function(result) {
  console.log(result)
  return `¡${result}!`;
})
.then(function (otroResult) {
  return new Promise((resolve) => {
    setTimeout(function() {
      console.log(otroResult)
    }, 1000)
  })
})
```

#### Métodos

* `Promise.all(iterable)`: Recibe un iterable de promesas y devuelve una promesa que sólo se resuelve cuando todas han cumplido o que falla si alguna de ellas falla. Si se cumple, lo que recibirá el then será un array con el resultado de las promesas en el mismo orden del array. Si falla, se capturar el primer error que haya fallado.

```javascript
// Todas las promesas salen a pedir de Milhouse
const promesa1 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(1)
  }, 1000)
});

const promesa2 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(2)
  }, 2000)
});

const promesa3 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(3)
  }, 3000)
});


console.time('promesas')
Promise.all([promesa1, promesa2, promesa3]).then(function(result) {
  console.log(result);
  console.timeEnd('promesas')
})
```

```javascript
// alguna de las promesas falla

const promesa1 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(1)
  }, 1000)
});

const promesa2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(new Error('fallo porque puedo'))
  }, 2000)
});

const promesa3 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(3)
  }, 3000)
});


console.time('promesas')
Promise.all([promesa1, promesa2, promesa3])
.then(function() {
  console.log('Yo nunca me ejecutaré :-(')
})
.catch(function(err) {
  console.log(err);
  console.timeEnd('promesas')
})
```

* `.allSettled(iterable)`: Recibe un iterable de promesas y espera hasta que todas se hayan cumplido. El then recibirá un array con un objeto que describe el resultado de cada una.

```javascript
const promesa1 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(1)
  }, 1000)
});

const promesa2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(new Error('fallo porque puedo'))
  }, 2000)
});

const promesa3 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(3)
  }, 3000)
});


console.time('promesas')
Promise.allSettled([promesa1, promesa2, promesa3])
.then(function(resultado) {
  console.log(resultado)
})
```

* `.race(iterable)`: Recibe un iterable de promesas y espera hasta que una de ellas se cumpla. Si cumple alguna, será el resultado de la misma lo que reciba el then. Si falla alguna antes de que eso ocurra, se devolverá el error de la misma.

```javascript
const promesa1 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(1)
  }, 1000)
});

const promesa2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(new Error('fallo porque puedo'))
  }, 2000)
});

const promesa3 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(3)
  }, 3000)
});


console.time('promesas')
Promise.race([promesa1, promesa2, promesa3])
.then(function(resultado) {
  console.log(resultado)
})
.catch(function(err) {
  console.log(err);
  console.timeEnd('promesas')
})
```

#### ¡Importante!

Junto con las promesas, en ES6 se introdujo lo que se llama `cola de trabajos/cola de micro tareas`. Esta cola de trabajos funciona igual que la `cola de mensajes`. La diferencia está en que la cola de trabajos sólo recibe los callbacks de las promesas mientras que la de mensajes recibe sólo la de callbacks. Además, la de trabajos tiene prioridad sobre la de mensajes. Esto significa que una promesa siempre tendrá prioridad sobre un callback.

```javascript
console.log('Que empiece la carrera');

setTimeout(function() {
  console.log('el equipo setTimeout cruza la linea de meta');
}, 0)

new Promise(function(resolve, reject) {
  resolve()
}).then(function() {
  console.log('¡El equipo promise cruza la línea de meta!')
})
console.log('Acaba la carrera')
```

## Async/Await

Tras la llegada de las promesas en ES6, en ES7 llegaron los operadores `async` y `await`. Estos nos permiten trabajar con promesas de una forma más *cool*.

```javascript
// Imaginemos que tenemos una promesa
const traeUsuario = (id) => new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: id,
        nombre: 'Peter',
        apellidos: 'Parker',
      })
    }, 1000)
  })


// Evitando top-level await
function funcionQueUsaLaPromesa(id) {
  traeUsuario(id)
  .then(usuario => console.log(usuario))
}
// Trabajaríamos con la promesa así
traeUsuario()

// Con async/await la forma de trabajar sería algo así
(async function(id) {
  const usuario = await traeUsuario(id);
  console.log(usuario)
})()

// Con await en el scope global
async function funcionQueUsaLaPromesa(id) {
  return traeUsuario(id)
}
// Trabajaríamos con la promesa así
const usuario = await traeUsuario(23)
console.log(usuario)
```

En las últimas versiones de algunos navegadores `await` se puede usar en el scope global de los módulos. No obstante, aún no está soportado en todos, lo cual puede producir problemas de compatibilidad.

Cuando colocamos `async` delante de una función, lo que estamos indicando es que dentro se va a trabajar con promesas. En caso de que no aparezca un `await`, significará que la función está devolviendo una promesa. Por el contrario, `await` sólo podrá aparecer en funciones en las que hayamos indicado que son `async`. En caso de que no pongamos `async`, obtendremos un `Syntax error`.

```javascript
(async function() {
  const miPromesa = () => new Promise((resolve) => setTimeout(() => {
    console.log('Estoy ejecutando la promesa');
    resolve('El oeste mola más');
  }))

  const miFuncionQueEjecutaUnaPromesa = async () => {
    console.log('Esta funcion no tiene await porque está devolviendo una promesa')
    return miPromesa();
  }

  const resultado = await miFuncionQueEjecutaUnaPromesa();
  console.log(resultado);
  return resultado;
})()
```

Lo que está ocurriendo por debajo es que JS está esperando hasta que la promesa se cumpla, pero sin bloquear el hilo de ejecución.

Dado que son promesas, podemos encadenarlas usando `.then`o `.catch`:

```javascript
(async function() {
  const miPromesa = () => new Promise((resolve) => setTimeout(() => {
    console.log('Estoy ejecutando la promesa');
    resolve('El oeste mola más');
  }))

  const miFuncionQueEjecutaUnaPromesa = async () => {
    console.log('Esta funcion no tiene await porque está devolviendo una promesa')
    return miPromesa();
  }

  const resultado = await miFuncionQueEjecutaUnaPromesa().then((result) => console.log(result));

  return resultado;
})()
```

Los métodos también pueden hacer uso de `async/await`.

```javascript
(async function() {
  const spiderMan = {
    async lanzaTelarania() {
      return new Promise((resolve, reject) => setTimeout(() => {
        resolve('Me he enganchado a un edificio')
      }, 2000))
    }
  }

  const resultado = await spiderMan.lanzaTelarania()
  console.log(resultado)
})()
```

### Manejo de errores

Las promesas no siempre tienen por qué cumplirse satisfactoriamente. Si no queremos dejar al azar lo que pasa con los resultados inesperados/erróneos, debemos de ser nosotros quienes las manejemos. La forma más sencilla es capturar la excepción que se lanzará.

```javascript
(async function() {
  const spiderMan = {
    async lanzaTelarania() {
      return new Promise((resolve, reject) => setTimeout(() => {
        reject(new Error('Uy que te caes.'))
      }, 2000))
    }
  }

  try {
    const resultado = await spiderMan.lanzaTelarania()
  } catch (ex) {
    console.error(ex.message)
  }
})()
```

Otra forma de gestionar este error, sería encadenar un `.catch`.

```javascript
(async function() {
  const spiderMan = {
    async lanzaTelarania() {
      return new Promise((resolve, reject) => setTimeout(() => {
        reject(new Error('Uy que te caes.'))
      }, 2000))
    }
  }

  const resultado = await spiderMan.lanzaTelarania().catch(ex => console.log(ex))
})()
```

En caso de que no la manejemos la excepción, esta tendrá el comportamiento estándar y bloqueará el hilo de ejecución.

Dado que `async/await` funciona con promesas, podemos usar las utilidades que ya conocemos de las promesas.

```javascript
(async function() {
  const spiderMan = {
    async lanzaTelarania() {
      return new Promise((resolve, reject) => setTimeout(() => {
        resolve('Me he enganchado a un edificio')
      }, 2000))
    },
    async patadaVoladora() {
      return new Promise((resolve, reject) => setTimeout(() => {
        resolve('PUM')
      }, 1500))
    }
  }


  const resultado = await Promise.all([spiderMan.lanzaTelarania(), spiderMan.patadaVoladora()])
  console.log(resultado)
})()
```

Hay un caso muy común que es ejecutar código asíncrono por cada elemento de una lista. Cuando se hace esto, hay que tener en cuenta que los métodos de arrays que reciben una función de callback son totalmente síncronos (`forEach`, `filter`, `reduce`). Esto se puede hacer combinando `Promise.all` con `Array.map` para transformar los elementos de la lista en promesas que resolverán o no:

```javascript
(async function() {
  const heroes = ['Batman', 'Superman', 'Wonder Woman', 'Green Arrow', 'Flash', 'Cyborg'];
  const miPromesa = async (el) => new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log(el);
      resolve(el.toLowerCase())
    }, 1000));
  const resultado = await Promise.all(heroes.map(miPromesa))
  console.log(resultado)
})()
```

Otra forma de hacerlo, sería usando `for...of`. La principal diferencia es que esto será totalmente secuencial.

```javascript
(async function() {
  const heroes = ['Batman', 'Superman', 'Wonder Woman', 'Green Arrow', 'Flash', 'Cyborg'];
  const miPromesa = async (el) => new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log(el);
      resolve(el.toLowerCase())
    }, 1000));
  const miArray = []
  for await (const heroe of heroes) {
    const elemento = await miPromesa(heroe);
    miArray.push(elemento)
  }
  console.log(miArray)
})()
```

### Enlaces de interés

- [⭐️🎀 JavaScript Visualized: Promises & Async/Await](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)
