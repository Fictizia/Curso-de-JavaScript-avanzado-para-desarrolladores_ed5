// Crear una función que valide que una URL es correcta. Vamos a asumir que las urls pueden contener caracteres alfanuméricos, guiones y puntos.

function isValidUrl(url) {
    const regex = /[https?://www][.][\w_-]*[.][a-z]/g;
    return regex.test(url);
}

console.info(isValidUrl('https://www.google.com')); // true
console.info(isValidUrl('http://www.google.pe')); // true
console.info(isValidUrl('http://www.algo1234.pe')); // true
console.info(isValidUrl('http://www.algo-1234.pe')); // true
console.info(isValidUrl('http://www.algo_1234.pe')); // true
console.info(isValidUrl('http://www.algo_1234')); // false
