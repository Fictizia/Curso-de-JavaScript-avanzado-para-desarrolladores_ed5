// 3. Crear una función que recibe un pin y diga si es válido o no. Un pin contiene 4 dígitos numéricos.

const pin = '1234';

const fnc = num => {
  const regex = /^\d{4}$/;
  const checkPin = num.match(regex) ? 'El PIN es válido' : 'PIN incorrecto';
  console.log(checkPin);
}

fnc(pin);