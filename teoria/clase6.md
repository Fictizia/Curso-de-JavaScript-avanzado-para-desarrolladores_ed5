![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

- Derivados de Object
  - Set
  - Map
  - Date
  - Proxy & Reflect

## Clase 6

### Set

La clase Set llega con ES6 y es una forma nueva de usar listas en JS. La principal diferencia entre un Set y un array normal es que un Set no admite valores duplicados.

#### Declaración

Un Set se crea usando el constructor de la clase Set. El constructor puede recibir iterables.

```javascript
const miNuevoSet = new Set();

const miSetAPartirDeUnArray = new Set([1, 1, 1, 1, 1, 2, 3, 4, 5, 6]); // { 1, 2, 3, 4, 5, 6 }

const miSetAPartirDeUnString = new Set("mama"); // { 'm', 'a' }
```

#### Propiedades

* `.size`: Devuelve el número de elementos que contiene el Set.

```javascript

const miSetAPartirDeUnArray = new Set([1, 1, 1, 1, 1, 2, 3, 4, 5, 6]);

console.log(miSetAPartirDeUnArray.size) // 6
```

#### Metodos

* `.add(valor)`: Añade un elemento al Set por el final si no existía y devuelve el Set completo.

```javascript
const miSetAPartirDeUnArray = new Set([1, 1, 1, 1, 1, 2]);

const setConNuevoElemento = miSetAPartirDeUnArray.add(3); // {1, 2, 3}

const noHayNingunaVariacion = miSetAPartirDeUnArray.add(1) // {1, 2, 3}
```

* `.has(valor)`: Devuelve si un Set contiene un valor o no.

```javascript
const miSetAPartirDeUnArray = new Set([1, 1, 1, 1, 1, 2]);

const existe = miSetAPartirDeUnArray.has(1) // true
```

* `.clear()`: Borra todos los elementos de un set. No devuelve nada.

```javascript
const miSetAPartirDeUnArray = new Set([1, 1, 1, 1, 1, 2]);

miSetAPartirDeUnArray.clear()
```

* `.delete()`: Elimina el elemento que le pasas en el Set y devuelve si existía o no.

```javascript
const miSetAPartirDeUnArray = new Set([1, 1, 1, 1, 1, 2]);

miSetAPartirDeUnArray.delete(1) // true
miSetAPartirDeUnArray.delete(1) // false
```

#### Iterando Sets

Dado que no podemos acceder por elementos a los Sets, sólo podemos iterar por ellos usando for...of. Podemos hacerlo de distintas maneras:

```javascript
const heroes = new Set(['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman'])

for (let heroe of heroes) {
  console.log(heroe)
}

// Otra forma
for (let heroe of heroes.keys()) { // .values() hace exactamente lo mismo
  console.log(heroe)
}

// Y otra más
for (let [key, heroe] of heroes.entries()) {
  console.log(key, heroe); //Las dos cosas valen lo mismo
}

// Y la definitiva
heroes.forEach(heroe => console.log(heroe))
```

#### Jugando con Sets

Afortunadamente, podemos convertir los Sets a Array de una forma muy sencilla:

```javascript
const setHeroes = new Set(['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman'])

const arrayHeroes = Array.from(setHeroes)

// o podemos...

const arrayHeroes = [...setHeroes]
```

### Map

Map es otra de las incorporaciones de ES6. Un Map es como un Objeto de JS, pero con algunas diferencias:

- Las claves en objetos pueden ser números, strings o simbolos mientras que en un Map las claves pueden ser cualquier cosa.

```javascript
const miFuncion = () => console.log('funcioncita')
const objeto = {
  [miFuncion]: 'Esta es mi funcion', // Aquí la función se convierte en string
}

const mapa = new Map();
mapa.set(miFuncion, 'Esto es una funcion') // Aquí la 'clave' es la función en sí
```

- En un Map podemos consultar el número de propiedades que tiene con la propiedad `.size`. En un objeto length es algo que no aporta y que se puede modificar libremente sin afectar a los objetos.
- Los Maps son iterables, mientras que los objetos no.

#### Declaración

Los Maps se crean usando el constructor de la clase Map. Este constructor puede recibir un array de arrays como el que devuelve Object.entries para crear un Map a partir de él.

```javascript
const miMapa = new Map()

// O si tenemos un array de arrays...
const yoMismo = [["nombre","Fran Quesada"], ["edad",27]];

const ahoraSoyUnMapa = new Map(yoMismo);
```

#### Propiedades

* `.size`: Devuelve el número de elementos que contiene el Set.

```javascript

const miMap = new Map();

miMap.set('primeraClave', 'primerElemento')
miMap.set(2, 'segundoElemento')
miMap.set('terceraClave', 3)
miMap.set({ a: 'cuarta', b: 'clave' }, 4)

console.log(miMap.size) // 4
```

#### Métodos

* `.set(clave, valor)`: Crea o modifica la propiedad `clave` en el map. Devuelve el Map.
* `.get(clave)`: Devuelve la un valor a partir de la clave proporcionada. Si no existe, devuelve undefined.

```javascript
miMapa.get(2) // segundoElemento
miMapa.get(3) // undefined
```

* `.delete(clave)`: Elimina un valor en un mapa a partir de su clave. Devuelve true o false dependiendo de si esa clave existía.

```javascript
miMap.delete(2) // true
miMap.delete(2) // false
```

#### Iterando Maps

```javascript
const heroes = new Map();
['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman'].forEach((heroe, i) => heroes.set(i, heroe))

// Let's go
for (let [i, heroe] of heroes) { // esto es equivalente a .entries
  console.log(i, heroe)
}

// Ahora sólo con las claves
for (let clave of heroes.keys()) {
  console.log(clave)
}

// Ahora sólo con los valores
for (let heroe of heroes.values()) {
  console.log(heroe)
}

// Y la definitiva
heroes.forEach((heroe, clave) => console.log(clave, heroe))
```

##### Ejercicios

1. Crear una función que reciba varios arrays de números y devuelva la unión de todos los arrays sin repeticiones.
Datos de prueba:

```javascript
// Entrada
const array1 = [1,2,3,4,5]
const array2 = [1,3,5,9,10]
const array3 = [4,5,6,7,9]
const array3 = [8,10]

// Salida
[1,2,3,4,5,6,7,8,9,10]

```
2. Crear una función que reciba dos arrays y devuelva la intersección de los dos (los elementos que estén entre los dos) sin repeticiones.

```javascript
// Entrada
const array1 = [1,2,3,1,4,5,9]
const array2 = [1,3,5,5,9,10]

// Salida
[1,3,5,9]
```

### [Date](https://www.w3schools.com/jsref/jsref_obj_date.asp)

Javascript nos facilita la vida con el manejo de fechas y horas proporcionándonos una clase Date. Por debajo, la clase Date trabaja con milisegundos. En concreto, con cuantos milisegundos han pasado desde el 1 de enero de 1970 a las 00:00 UTC (Esto comunmente se llama timestamp). Si un milisegundo es negativo, quiere decir que es anterior a 1970. Las fechas se crean por defecto en la zona horaria del navegador.

#### Declaracion

Para crear una fecha, usamos el constructor de la clase Date. El constructor de la clase Date admite distintos formatos de entrada.

```javascript

// Nos devuelve la fecha actual
const fecha = new Date();

// Puede admitir milisegundos
const fecha = new Date(737823600000);

// Puede crearse a partir de un string
const fecha = new Date('19 Mayo 1993 17:00');

// Puede admitir año, mes y dia. El mes se empieza a contar por 0 :-)
const fecha = new Date(1993, 5, 1993);

// Si usamos este formato, admite también hora, minutos, segundos y milis
const fecha = new Date(1993, 5, 1993, 17, 00);
```

#### Metodos

La clase Date nos proporciona algunos métodos estáticos:

* `Date.now()`: Devuelve el timestamp actual.
* `Date.parse()`: Recibe una fecha en formato texto y devuelve su timestamp. La hora por defecto será las 00:00:00 (hora local).

Los objetos Date nos proporcionan los siguientes métodos de lectura y edición:

* Lectura

  * Hora local

```javascript
  const ahorita = new Date();
  console.log(`La fecha es: ${ahorita}`);
  console.log(`La fecha en timestamp es: ${ahorita.getTime()}`)
  console.log("==== FECHA ====");
  console.log(`El año: ${ahorita.getFullYear()}`); // 4 digitos
  console.log(`El mes: ${ahorita.getMonth()}`); // 0 - 11
  console.log(`El día de la semana: ${ahorita.getDay()}`); // 0 - 6 (D - S)
  console.log(`El día del mes: ${ahorita.getDate()}`); // 1-31
  console.log("==== HORA ====");
  console.log(`Horas: ${ahorita.getHours()}`);
  console.log(`Minutos: ${ahorita.getMinutes()}`);
  console.log(`Segundos: ${ahorita.getSeconds()}`);
  console.log(`milisegundos: ${ahorita.getMilliseconds()}`);
```

  * UTC

```javascript
  const ahorita = new Date();
  console.log("Con UTC: ");
  console.log(`La fecha en timestamp ya es UTC: ${ahorita.getTime()}`)
  console.log("==== FECHA ====");
  console.log(`El año: ${ahorita.getUTCFullYear()}`); // 4 digitos
  console.log(`El mes: ${ahorita.getUTCMonth()}`); // 0 - 11
  console.log(`El día de la semana: ${ahorita.getUTCDay()}`); // 0 - 6 (D - S)
  console.log(`El día del mes: ${ahorita.getUTCDate()}`); // 1-31
  console.log("==== HORA ====");
  console.log(`Horas: ${ahorita.getUTCHours()}`);
  console.log(`Minutos: ${ahorita.getUTCMinutes()}`);
  console.log(`Segundos: ${ahorita.getUTCSeconds()}`);
  console.log(`milisegundos: ${ahorita.getUTCMilliseconds()}`);
```
* Escritura
  * Hora local

  ```javascript
    const nuevoAnio = new Date(2020, 1, 1);
    console.info("La fecha es " + nuevoAnio);

    nuevoAnio.setFullYear(1969); // Pasamos a 1969
    console.info("La fecha es " + nuevoAnio);

    nuevoAnio.setDate(56); // 1 Enero + 56 Días
    console.info("La fecha es " + nuevoAnio);

    nuevoAnio.setMilliseconds(1500); // 1500ms
    console.info("La fecha es " + nuevoAnio);

    nuevoAnio.setHours(36); // le sumamos 36 horas
    console.info("La fecha es " + nuevoAnio);

    nuevoAnio.setMonth(-6); // le quitamos 6 meses
    console.info("La fecha es " + nuevoAnio);
  ```

  * UTC

  ```javascript
    const nuevoAnio = new Date(2020, 1, 1);
    console.info("La fecha es " + nuevoAnio);

    nuevoAnio.setUTCFullYear(1969); // Pasamos a 1969
    console.info("La fecha es " + nuevoAnio);

    nuevoAnio.setDate(56); // 1 Enero + 56 Días
    console.info("La fecha es " + nuevoAnio);

    nuevoAnio.setMilliseconds(1500); // 1500ms
    console.info("La fecha es " + nuevoAnio);

    nuevoAnio.setHours(36); // le sumamos 36 horas
    console.info("La fecha es " + nuevoAnio);

    nuevoAnio.setMonth(-6); // le quitamos 6 meses
    console.info("La fecha es " + nuevoAnio);
  ```

* `.getTimezoneOffset()`: Devuelve la diferencia entre tu zona horaria y UTC en minutos.
* `.toString()`: Devuelve un string con la fecha y la hora
* `.toDateString()`: Devuelve un string con la fecha
* `.toTimeString()`: Devuelve un string con la hora
* `.toUTCString()`: Devuelve un string con la fecha y la hora en UTC
* `.toISOString()`: Devuelve un string con la fecha y la hora en UTC de acuerdo a la ISO 8601
* `.toLocaleString()`: Devuelve una cadena con la fecha en formato local.

```javascript
  console.log(`Diferencia en minutos con UTC: ${ahorita.getTimezoneOffset()}`);
  console.log(`Fecha y hora: ${ahorita.toString()}`);
  console.log(`Fecha: ${ahorita.toDateString()}`)
  console.log(`Hora + zona horaria: ${ahorita.toTimeString()}`);
  console.log(`Formato ISO: ${ahorita.toISOString()}`);
  console.log(`String en UTC: ${ahorita.toUTCString()}`);
  console.log(`String en formato local: ${ahorita.toLocaleString()}`);
  console.log(`String en formato alemán: ${ahorita.toLocaleString('de')}`);
```

#### Trabajando con Dates

```javascript
const elGranDia = new Date(2020, 10, 5);
elGranDia.toLocaleString(); // 5/11/2020 0:00:00

const elGranDia = new Date(2020, 10, 5);
elGranDia.setDate(theBigDay.getDate() + 24);
elGranDia.toLocaleString(); // 5/11/2020 0:00:00

const elGranDia = new Date(2020, 10, 5);
elGranDia.setDate(elGranDia.getDate() + 32);
elGranDia.toLocaleString(); // 5/11/2020 0:00:00

const elGranDia = new Date(2020, 10, 5);
elGranDia.setDate(elGranDia.getDate() + 22);
elGranDia.toLocaleString(); // 5/11/2020 0:00:00

const elGranDia = new Date(2020, 10, 5);
elGranDia.setDate(elGranDia.getDate() + 22 + 32 + 24);
elGranDia.toLocaleString(); // 5/11/2020 0:00:00
```

#### Librerias

- [momentjs/moment-timezone](https://momentjs.com/)
- [dayjs](https://github.com/iamkun/dayjs)
- [luxon](https://moment.github.io/luxon/)

### Error

Cuando en una sentencia de Javascript se produce un error, se dice que lanza una excepcion. El interprete de Javascript entonces revisa si se está manejando esa excepción, tanto en su contexto como en contextos superiores, y si no se está manejando, el programa termina. Javascript nos provee de 7 tipos de errores incorporados. Algunos de los más importantes son:

- Error: la base del resto. Representa un error genérico. Será en el que más nos centremos.
- ReferenceError: Se lanza cuando intentamos acceder a una variable que no existe.
- SyntaxError: Se da cuando escribimos mal el código o nos falta algo.
- TypeError: Esta excepción salta cuando algo no tiene el valor que esperas.

#### Definición

Para crear un nuevo Error, usaremos el constructor de la clase Error. Este constructor recibe un mensaje de error.

```javascript
// No muy recomendable, mejor contar que está pasando
const miError = new Error();

const miErrorAutoExplicado = new Error('Aquaman no es un heroe');
```

#### Propiedades

Las siguientes propiedades pueden variar entre navegadores, ojocuidao:

- `.message`: El mensaje de error con el que ha sido creado.
- `.stack`: La pila de llamadas hasta donde se ha creado el error.

### Manejo de excepciones

#### throw

Para lanzar excepciones usamos la palabra reservada `throw`:

```javascript
if (suelo.fregado) {
  throw new Error('QUE ME PISAS LO FREGAO');
}
```

throw no tiene por qué "lanzar" especificamente errores, puede lanzar cualquier cosa:

```javascript

throw 'Mi error';
throw 42;
throw {};
```

#### try...catch
Para capturalas y manejarlas usaremos try...catch. Si hay un `try`, siempre debe ir acompañado de `catch`, `finally` o ambos.

```javascript
try {
  // Aquí iría el código susceptible de lanzar una excepción
  // Esta parte es obligatoria
} catch (exception) {
  // Si lo que queremos es manejar la excepción,
  // lo haremos aquí
} finally {
  // Si está, este código siempre se ejecuta
}
```



```javascript

  try {
    const miJson = require('../fileQueNoExiste.json')
  } catch (ex) {
    console.error(ex.message)
  }
```

Cuando estamos manejando una excepción, podemos elegir lavarnos las manos y que se maneje en otro punto del código:

```javascript
try {
    try {
        throw new Error('Mi error interno');
    } catch (exception) {
      if(exception instanceof Error) {
        console.error(exception);
        throw exception;
      }
}
} catch (ex) {
    console.error(ex);
}
```

### Proxy & Reflect

Los proxies en JS nos permiten interceptar invocaciones y operaciones sobre objetos antes de que ocurran y ser nosotros quienes controlemos como estas operaciones se llevan a cabo. Los proxies se crean usando el constructor de Proxy, y reciben el objeto que van a interceptar y un objeto `handler` en el que se definen que operaciones se van a interceptar y que tiene que hacer el proxy en cada una de ellas. La lista de operaciones que se pueden interceptar la podéis encontrar [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Proxy).

Los proxies van muy ligados a Reflect, que algo que llegó también en ES6. En programación, `reflection` se refiere a la capacidad que tiene algo para leer o editar sobre sí mismo. Ejemplos de esto son: `Array.isArray()`, `Object.keys()`, etc. Con Reflect, tenemos un objeto que nos proporciona los métodos para aplicar sobre objetos las transformaciónes que queremos. Estos métodos son los mismos que pueden interceptar los proxies.

```javascript
const persona = {
  nombre: 'Peter',
  apellidos: 'Parker',
  edad: 16,
  aficiones: ['fotografia', 'apatrullar la ciudad'],
  topSecret: '¡¡¡ES SPIDERMAN!!!',
};

const manejador = {
  get: (objeto, propiedad, valor) => {
    if (propiedad === 'topSecret') {
      throw new Error('Esto no lo puedes ver')
    } else {
      return Reflect.get(objeto, propiedad, valor);
    }
  },
  set: (objeto, propiedad, valor) => {
    if (!valor instanceof Array) {
      throw new Error('aficiones tiene que ser una lista, lo siento mucho');
    }
    if (propiedad === 'aficiones' && objeto.edad < 18 && valor.includes('botellon')) {
      throw new Error('No vayas tan rapido, tigre')
    }
    return Reflect.set(objeto, propiedad, valor)
  }
}

const peterParker = new Proxy(persona, manejador)
```

También podemos crear proxies 'revocables', los cuales se pueden cancelar en cualquier momento y así dejan de ser intermediarios con tu objeto. Este tipo de proxies se crean con el método revocable de la clase Proxy.

```javascript

const revocable = Proxy.revocable({}, {
  get: (objeto, propiedad) => {
    console.log(`Accediendo a: ${propiedad}`)
    return objeto[propiedad];
  }
})

const proxy = revocable.proxy
proxy.nombre = 'Pepito'

console.log(proxy.nombre)

revocable.revoke();

console.log(proxy.nombre) // TypeError
```

Aquí podemos ver un ejemplo con un poco más de utilidad

```javascript
const cacheameEsto = (objetoACachear, ttl = 60) => {
  const creadoEn = Date.now();
  const haExpirado = () => (Date.now() - creadoEn) > (ttl * 1000);
  const manejador = {
    get: (objeto, propiedad) => haExpirado() ? undefined : Reflect.get(objeto, propiedad)
  }
  return new Proxy(objetoACachear, manejador)
}
```

**¡¡¡DISCLAIMER!!!**

Tened en cuenta que los proxies en términos de rendimiento son pésimos.

#### Ejercicios

3. Que pesado Aquaman. No sabemos cómo hacer para que tranquilos a los miembros de la Liga de la Justica. Ha comenzado a entrar usando variaciones de su nombre: aQuaman, AQUAMAN, aquaman... Crear un listado de heroes `heroes` que lance una excepción cada vez que intenten añadir a dicho array cualquier variación de 'Aquaman'.

```javascript
const supers = ["superman", "batman"];

const manejador = {
  set: (objeto, propiedad, valor) => {
    if (propiedad !== 'length' && valor.toLowerCase().trim() === 'aquaman') {
      throw new Error('Largo de aquí');
    }
    return Reflect.set(objeto, propiedad, valor)
  }
}

const heroesDeVerdad = new Proxy(supers, manejador)

```

4. Nuestro carrito de la compra es bastante inteligente, pero no estaría mal que lo fuese aún más. Crear un metodo anade que reciba un producto y lo añada al carrito. Para ello Hay que tener en cuenta las siguientes cuestiones:

- si un producto ya existe en el carrito hay que aumentar la cantidad, no duplicarlo.
- Si el precio del nuevo producto es menor, será este el que predomine.
- La cantidad por defecto será 1, pero si hubiera más habrá que sumarlos.
- Hay que validar los tipos, el nombre del producto es un string, la cantidad es un entero y el precio es un número. En caso de que se introduzca un producto con un tipo inválido se debe lanzar una excepción.


```javascript
const carrito = {
  productos: [{
    nombre: 'papel higienico',
    unidades: 4,
    precio: 5,
  },
  {
    nombre: 'chocolate',
    unidades: 2,
    precio: 1.5
  }],
  get precioTotal() {
    let precio = 0;
    for (let i = 0; i < this.productos.length; i++) {
      precio += this.productos[i].unidades * this.productos[i].precio;
    }
    return precio;
  },
  anade(producto) {
    const { nombre, unidades = 1, precio } = producto
    if (typeof nombre !== 'string') {
      throw new Error('nombre debe ser un string');
    }
    if (typeof precio !== 'number') {
      throw new Error('precio debe ser un número');
    }
    if (!Number.isInteger(unidades)) {
      throw new Error('unidades debe ser un entero');
    }
    const encontrado = this.productos.findIndex(producto => producto.nombre === nombre.toLowerCase().trim());
    if (encontrado) {
      const producto = this.productos[encontrado]
      producto.unidades += unidades;
      if (producto.precio > precio) {
        producto.precio = precio;
      }
    } else {
      this.productos.push({
        ...producto,
        nombre: nombre.toLowerCase().trim()
      })
    }
  }
}

```
