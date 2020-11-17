//1 .Como estamos de cuarentena y tenemos que encontrar una forma de pasar el tiempo, vamos a probar a ordenar nuestra estantería. Para ello, vamos a crear un método crear un método interno ordenarPorNombre que ordene los títulos de la librería por su título.


function reduce(array, funcion, inicio) {
  let valor = inicio
  for (let i = 0; i < array.length; i += 1) {
    valor = funcion(valor, array[i], i, array)
  }
  return valor
}

const sumaTodosLosNumeros = (arrayNumeros) => arrayNumeros.reduce((a, b) => a + b, 0)

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
    const mensaje = this.libros.reduce((acumulado, actual) => {
      const prefijo = actual.leido ? 'Ya' : 'Aun no';
      return `${acumulado}
  ${prefijo} has leido ${actual.nombre} de ${actual.autor}`
    }, '')
    console.log(mensaje)
  }
}