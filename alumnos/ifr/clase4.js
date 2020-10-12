/**
 * Ej 10
 * Vamos a calcular el precio del carrito de la compra. Un carrito de la compra tiene una propiedad productos que es una lista de los productos.
 * Cada producto tiene las siguientes propiedades:
 * nombre: Nombre del producto (Papel higiénico, leche, ...)
 * unidades: número elementos que se van a comprar de dicho producto
 * precio: precio unitario del producto
 * Además, tiene una propiedad `precioTotal donde se va actualizando automáticamente el precio del producto.
 * Crear el código necesario para soportar esta funcionalidad.
 */
const carrito = {
    productos: [
		{
			nombre: 'papel higienico',
			unidades: 4,
			precio: 5,
    	},
		{
			nombre: 'chocolate',
			unidades: 2,
			precio: 1.5
		}
	],
    get precioTotal(){
        return this.productos.reduce((precioTotal, { unidades, precio }) => precioTotal + unidades * precio, 0 )
    }
};

console.log(carrito.precioTotal === 23);


/**
 * Ej 11
 * En casa tenemos una estantería muy interesante de libros. Cada libro se compone de las siguientes propiedades:
 * 		nombre: Nombre del libro
 * 		autor: Nombre de quien lo ha escrito
 * 		leido: Un boleano que nos indica si hemos leído o no el libro
 * Nuestra estantería necesita las siguientes funcionalidades:
 * 		Un método log que imprima por cada libro su nombre, autor y si lo has leído o no con el siguiente formato:
 * 			Si no lo has leído: Aun no has leído El Quijote de Miguel de Cervantes
 * 			Si lo has leído: Ya has leído El Quijote de Miguel de Cervantes
 * 		Un método sugerencia que te devuelva de forma aletoria el nombre de un libro que no hayas leído y su autor.
 */

const estanteria = {
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
		}
	],
	log(){
		this.libros.forEach(libro => {
			const { leido, nombre, autor } = libro;
			const fraseLeido = leido ? 'Ya has leído': 'Aún no has leído';
			console.log(`${fraseLeido} ${nombre} de ${autor} `)
		});
	},
	sugerencia(){
		const librosAunNoLeidos = this.libros.filter(libro => !libro.leido);
		const numeroDeLibrosNoLeidos = librosAunNoLeidos.length; //4
		const numerAleatorio = Math.trunc(Math.random() * numeroDeLibrosNoLeidos); // Número aleatorio entre 0 y 3
		const libroSugerido = librosAunNoLeidos[numerAleatorio];
		const { nombre, autor } = libroSugerido;
		return `Creo que podría gustarte el libro '${nombre}' de '${autor}'`;
	}
} 

estanteria.log();
estanteria.sugerencia();
