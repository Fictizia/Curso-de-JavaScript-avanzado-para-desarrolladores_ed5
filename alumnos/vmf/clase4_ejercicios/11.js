/* En casa tenemos una estantería muy interesante de libros.
Cada libro se compone de las siguientes propiedades:

Nuestra estantería necesita las siguientes funcionalidades:

Un método log que imprima por cada libro su nombre, autor y si lo has
leído o no con el siguiente formato:

- Si no lo has leído: Aun no has leído El Quijote de Miguel de Cervantes
- Si lo has leído: Ya has leído El Quijote de Miguel de Cervantes

Un método sugerencia que te devuelva de forma aletoria un el nombre
de un libro y su autor que no hayas leído.
 */

let estanteria = {
  libros: [
    {
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false
    },
    {
      nombre: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      leido: false,
    },
    {
      nombre: 'Harry Potter y el caliz de fuego',
      autor: 'J.K. Rowling',
      leido: true,
    },
    {
      nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      leido: false
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true
    },
    {
      nombre: 'Iliada',
      autor: 'Homero',
      leido: false
    },
  ],
  log() {
     const resultado = this.libros.reduce((acu, libro) => {
      const fragmentoInicial = libro.leido ? "Ya has leido" : "Aún no has leido";
      return `${fragmentoInicial} ${libro.nombre} de ${libro.autor}
      ${acu}`;
     }, '')
     console.log(resultado);
  },
  sugerencia() {
    const librosFiltrados = this.libros.filter(libro => !libro.leido);
    const indiceRandom = Math.floor(Math.random() * librosFiltrados.length); // gracias stackOverFlow once again.
    const caca = `Sugerencia del día: ${librosFiltrados[indiceRandom].nombre} de ${librosFiltrados[indiceRandom].autor}, ¡quizá puede ser tu próximo libro!`;
    console.log(caca);
  }
}

estanteria.log();
estanteria.sugerencia();

/*
 Dudas --> 
  1. Me cuesta debuggear lo que hay dentro... por console.log, tips para ir más rapido - no tengo ni idea.
  2. Hay alguna manera más organizada de hacer un salto de linea?

  Reduce:
  valorInicial Optional
  Un valor a usar como primer argumento en la primera llamada de la función callback.
  Si no se proporciona el valorInicial, el primer elemento del array será utilizado y saltado.
  Llamando a reduce() sobre un array vacío sin un valorInicial lanzará un TypeError.
*/