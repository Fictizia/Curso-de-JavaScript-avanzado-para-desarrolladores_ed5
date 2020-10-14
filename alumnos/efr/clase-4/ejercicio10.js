// Vamos a calcular el precio del carrito de la compra. Un carrito de la compra tiene una propiedad productos que es una lista de los productos. 
// Cada producto tiene las siguientes propiedades:
// nombre: Nombre del producto (Papel higiénico, leche, ...)
// unidades: número elementos que se van a comprar de dicho producto
// precio: precio unitario del producto
// Además, tiene una propiedad precioTotal donde se va actualizando automáticamente el precio del producto. 
// Crear el código necesario para soportar esta funcionalidad.

const carrito = {
    productos: [
        {
            nombre: 'papel higienico',
            unidades: 4,
            precio: 5,
            get precioTotalProducto(){
                return this.unidades * this.precio
            }
        },
        {
            nombre: 'chocolate',
            unidades: 2,
            precio: 1.5,
            get precioTotalProducto(){
                return this.unidades * this.precio
            }
        }
    ],
    get precioTotalCarrito(){
        return this.productos.reduce((a,b)=> a.precioTotalProducto + b.precioTotalProducto )
    }
}

console.log(carrito.productos[0].precioTotalProducto === 20)

console.log(carrito.precioTotalCarrito === 23)