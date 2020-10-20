/*
Nuestro carrito de la compra es bastante inteligente, pero no estaría mal que lo fuese aún más.
Crear un metodo "añade" que reciba un producto y lo añada al carrito. Para ello Hay que tener en cuenta las siguientes cuestiones:

- si un producto ya existe en el carrito hay que aumentar la cantidad, no duplicarlo.
- Si el precio del nuevo producto es menor, será este el que predomine.
- La cantidad por defecto será 1, pero si hubiera más habrá que sumarlos.
- Hay que validar los tipos, el nombre del producto es un string, la cantidad es un entero y el precio es un número. En caso de que se
introduzca un producto con un tipo inválido se debe lanzar una excepción.
*/


let carrito = {
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
       return this.productos.reduce((acu, articulo) => {
         return acu += articulo.precio;
      }, 0) 
    },
    anadirProducto(...args) {
        // if (this.productos.nombre !== )
        this.productos.map((articulo, i) => {
            const a = [...args[i]]
            console.log(a);
            if (articulo.nombre !== [...args[i]]) {
                // console.log("caca");
            }
        })
        // const productoExiste = this.productos.find(articulo => articulo.nombre !== ...);
    }
  };

let pepinillos = [{
    nombre: 'pepinillos',
    precio: 0.90,
    unidades: 1,
}]

carrito.anadirProducto(pepinillos);

/*
¿Como sé cuando usar get o set?
anadir producto puede ser un set? precioTotal() podría no llevar get?
no me queda muy clara esta parte

como recorrer un array dentro de otro?
*/