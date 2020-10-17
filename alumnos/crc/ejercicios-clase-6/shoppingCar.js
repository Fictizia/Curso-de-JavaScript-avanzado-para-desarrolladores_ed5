/**
 * Nuestro carrito de la compra es bastante inteligente, pero no estaría
 * mal que lo fuese aún más. Crear un metodo anade que reciba un 
 * producto y lo añada al carrito. Para ello Hay que tener en cuenta las siguientes cuestiones:

- Si un producto ya existe en el carrito hay que aumentar la cantidad, no duplicarlo.
- Si el precio del nuevo producto es menor, será este el que predomine.
- La cantidad por defecto será 1, pero si hubiera más habrá que sumarlos.
- Hay que validar los tipos, el nombre del producto es un string, 
la cantidad es un entero y el precio es un número. En caso de que 
se introduzca un producto con un tipo inválido se debe lanzar una excepción.
 */

class Product {
  amount = 1
  name = ''
  price = 0

  incrementAmount() {
    ++this.amount
  }

  newPrice(price) {
    if (price < this.price) this.price = price
  }
}

const handler = {
  set: (object, property, value) => {
    if (typeof value !== 'number' && property === 'price') {
      throw Error(`Number nedeed in property:${property}`)
    }

    if (typeof value !== 'string' && property === 'name') {
      throw Error(`String nedeed in property:${property}`)
    }

    if (!Number.isInteger(value) && property === 'amount') {
      throw Error(`Integer nedeed in property:${property}`)
    }
    return Reflect.set(object, property, value)
  }
}

const shoppingCar = []

function setProductInShoppingCar(myProduct) {
  const productInShoppingCar = shoppingCar.find(product => product.name === myProduct.name)
  if (productInShoppingCar) {
    productInShoppingCar.incrementAmount()
    productInShoppingCar.newPrice(myProduct.price)
  } else {
    const productProxy = new Proxy(new Product(), handler)
    productProxy.name = myProduct.name
    productProxy.price = myProduct.price
    shoppingCar.push(productProxy)
  }
}


setProductInShoppingCar({ name: 1, price: 19 }) // show error message "String nede"