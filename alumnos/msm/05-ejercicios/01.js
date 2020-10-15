'use strict';

// Como estamos de cuarentena y tenemos que encontrar una forma de pasar el tiempo, vamos a probar a ordenar nuestra estantería. Para ello, vamos a crear un método crear un método interno ordenarPorNombre que ordene los títulos de la librería por su título.


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
  }],

  prestamo: false,
  librosPrestados: [],

  set prestamo(valor) {
    if(valor) {
      this.libros = this.libros.filter(libro => !libro.leido)
      this.librosPrestados = this.libros.filter(libro => libro.leido)
    } else {
      this.libros = [...this.libros, ...this.librosPrestados]
      this.librosPrestados = []
    }
  },

  ordenarPorNombre() {
    let librosOrdenados = estanteria.libros.sort();
    return librosOrdenados
  }

  

}

estanteria.libros.prestamo = true;


console.log(estanteria.ordenarPorNombre());
console.log(estanteria.librosPrestados);
