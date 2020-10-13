/** 2.- Al salir al supermercado, hemos visto que un vecino ha dejado un cartel pidiendo que le dejen libros para pasar el rato y hemos decidido dejarle los libros de nuestra estantería que ya hemos leído. Crear una propiedad interna prestamo que sea booleana que al cambiar a true almacene en otra propiedad interna librosPrestados los libros que hemos leído y los quite del total de libros. Ambas propiedades pertenecen al objeto estanteria. */
/** 3.- Parece que los libros no han sido del agrado de nuestro vecino y ha decido devolvérnoslos antes de tiempo. Modificar esta variable interna para que cuando pase a valer false los libros leidos vuelvan a la estanteria. No hace falta mantener el orden. */

const estanteria = {
  libros: [
    {
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false, 
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
      leido: false,
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true,
    },
    {
      nombre: 'Iliada',
      autor: 'Homero',
      leido: false,
    },
    ],
  prestamo: false, 
  librosPrestados: [], 

  set prestamo(valor) {
      const {librosPrestados, libros} = this;
      if (valor) {
          librosPrestados = libros.filter(libro => libro.leido)
          libros = libros.filter(libro => !libro.leido)
      } else {
          libros = [...libros, ...librosPrestados]
          librosPrestados = []
      }
  }
}