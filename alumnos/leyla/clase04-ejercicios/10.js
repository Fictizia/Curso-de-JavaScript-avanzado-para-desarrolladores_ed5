// Vamos a calcular el precio del carrito de la compra. Un carrito de la compra tiene una propiedad productos que es una lista de los productos. Cada producto tiene las siguientes propiedades:
// nombre: Nombre del producto (Papel higiénico, leche, ...)
// unidades: número elementos que se van a comprar de dicho producto
// precio: precio unitario del producto
// Además, tiene una propiedad `precioTotal donde se va actualizando automáticamente el precio del producto. Crear el código necesario para soportar esta funcionalidad.
// NOTA: precioTotal es un método dentro de carrito

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
    get precioTotal() {
        let precio = 0;
        for(let i = 0; i < this.productos.length; i++) {
            precio+= this.productos[i].unidades * this.productos[i].precio;
        }
        return precio;
    }
}

console.info(carrito.precioTotal);


