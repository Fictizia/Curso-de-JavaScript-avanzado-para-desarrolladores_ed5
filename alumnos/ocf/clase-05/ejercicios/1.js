// 1. Como estamos de cuarentena y tenemos que encontrar una forma de pasar el tiempo, vamos a probar a ordenar nuestra estantería. Para ello, vamos a crear un método interno ordenarPorNombre que ordene los títulos de la librería por su título.

const estanteria = {
  libros: [{
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
  ordenarPorNombre() {
    let coleccion = [];
    for (const libro of this.libros) {
      const {nombre} = libro;
      coleccion.push(nombre);
    }      
    console.log(coleccion.sort());
  }
}

estanteria.ordenarPorNombre();
/* Retorna:
[
  'Berserk',
  'El caballero oscuro',
  'El ingenioso hidalgo Don Quijote de la Mancha',
  'El mundo amarillo',
  'Harry Potter y el caliz de fuego',
  'Iliada'
]
*/ 