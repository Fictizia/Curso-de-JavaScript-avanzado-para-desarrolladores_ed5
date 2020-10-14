//Ejercicios Objetos

//10
/**
 * Vamos a calcular el precio del carrito de la compra. Un carrito de la compra tiene una propiedad productos
 *  que es una lista de los productos. Cada producto tiene las siguientes propiedades:
 *
 * nombre: Nombre del producto (Papel higiénico, leche, ...)
 * unidades: número elementos que se van a comprar de dicho producto
 * precio: precio unitario del producto
 * 
 * Además, tiene una propiedad precioTotal donde se va actualizando automáticamente el precio del producto.
 * Crear el código necesario para implementar este carrito.
 */
const carrito = {
    productos : [],
    precioTotal : 0,

    set addproduct (productName, unidadesproducto, precioPruducto){
        this.productos.push({name : productName, unidades: unidadesproducto, precio: precioPruducto});
        this.precioTotal += precioPruducto
    }
}

//11
/**En casa tenemos una estantería muy interesante de libros. Cada libro se compone de las siguientes propiedades:
 * 
 * nombre: Nombre del libro
 * autor: Nombre de quien lo ha escrito
 * leido: Un boleano que nos indica si hemos leído o no el libro Nuestra estantería necesita las siguientes funcionalidades:
 * Un método log que imprima por cada libro su nombre, autor y si lo has leído o no con el siguiente formato:
 *  Si no lo has leído: Aun no has leído El Quijote de Miguel de Cervantes
 *  Si lo has leído: Ya has leído El Quijote de Miguel de Cervantes
 * 
 * Un método sugerencia que te devuelva de forma aletoria un el nombre de un libro y su autor que no hayas leído.
 */

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

    logEstanteria(){
      let log = '';
      this.libros.forEach(libro => {
        if (libro.leido){
          log += `- Ya has leído ${libro.nombre} de ${libro.autor}.\n`;
        }else{
          log += `- Aun no has leído ${libro.nombre} de ${libro.autor}.\n`;
        }
      })
      return log
    },

    logSugerencia(){
        let noLeidos= [];
        this.libros.forEach(libro => {
          if (libro.leido === false){
                noLeidos.push(libro);
            }
        });   
        let libroSugerido = noLeidos[Math.floor(Math.random() * noLeidos.length)];
        return `Te sugiero que leas ${libroSugerido.nombre}`;
    }

};
