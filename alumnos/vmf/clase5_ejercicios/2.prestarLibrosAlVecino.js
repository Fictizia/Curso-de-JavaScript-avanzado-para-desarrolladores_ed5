/* Al salir al supermercado, hemos visto que un vecino ha dejado un cartel pidiendo que
le dejen libros para pasar el rato y hemos decidido dejarle los libros de nuestra estantería
que ya hemos leído.

Crear una propiedad interna prestamo que sea booleana que al cambiar
a true almacene en otra propiedad interna librosPrestados los libros que hemos leído y
los quite del total de libros. Ambas propiedades pertenecen al objeto estanteria. */

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
    },      {
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
  librosPrestados: [],
  set prestamo(flag) {
    if (flag) {
      this.libros.forEach((libro, i) => {
        if (libro.leido) {
          // splice: elimina del array, devuelve un array con los elementos eliminados
          let box = this.libros.splice(i, 1);
          // devuelve un nuevo array unido con lo que le mandes
          this.librosPrestados = this.librosPrestados.concat(box);
        }
      })
      console.log("Acabo de prestar estos libros:", this.librosPrestados);
    } else {
      console.log("No hay libros que prestar porque no los he leido");
    }
  }
}

estanteria.prestamo = true;
estanteria.prestamo = false;