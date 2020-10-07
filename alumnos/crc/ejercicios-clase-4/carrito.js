
const carrito = {
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
    return this.productos.reduce((acc, product) => {
      acc += product.precio;
      return acc;
    }, 0)
  }
}