/**
 * Ej 1
 * Como estamos de cuarentena y tenemos que encontrar una forma de pasar el tiempo, 
 * vamos a probar a ordenar nuestra estantería. 
 * Para ello, vamos a crear un método interno ordenarPorNombre 
 * que ordene los títulos de la librería por su título.
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
	prestamo: false,
	librosPrestados : [],
	set prestamo(valor) {
		if(valor){
			this.librosPrestados = this.librosPrestados.concat(this.libros.filter(({ leido }) => leido));
			this.libros = this.libros.filter(({ leido }) => !leido);
		}
		else if(valor === false){
			this.libros = this.libros.concat(this.librosPrestados || []);
			this.librosPrestados = [];
		}
	}, 
    ordenarPorNombre(){
        return this.libros.sort(({ nombre: nombreA }, { nombre: nombreB }) => nombreA > nombreB ? 1 : -1)
    }
}

estanteria.ordenarPorNombre();
estanteria.libros;
estanteria.prestamo = true;
estanteria.librosPrestados;
estanteria.libros;
estanteria.prestamo = false;
estanteria.librosPrestados;
estanteria.libros;