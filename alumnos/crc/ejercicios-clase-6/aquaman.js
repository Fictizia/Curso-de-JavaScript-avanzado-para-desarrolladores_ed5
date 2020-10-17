const heroes = ['batman', 'superman', 'wonderwoman', 'aquaman'];

const handler = {
  set: (object, property, value) => {
    if (typeof value === 'string' && value.toLowerCase() === 'aquaman') {
      throw Error('Aquaman ya existe')
    }
    return Reflect.set(object, property, value)
  }
}

const heroesProxy = new Proxy(heroes, handler)
heroesProxy.push('ramdomheroe')
