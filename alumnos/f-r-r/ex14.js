// Crea una función que reciba un número y devuelva un string con formato ordinal inglés. Esto es:
// acaba en 1 --> 301st

// acaba en 2 --> 302nd

// acaba en 3 --> 303rd

// cualquier otra cosa --> 300th

function englishSpeling(num) {
    let str = num % 10;
    switch (str) {
        case 1: 
            return num + 'st';
        case 2:
            return num + 'nd';
        case 3:
            return num + 'rd';
        default:
            return num + 'th';
    }
}
console.log(englishSpeling(101));
console.log(englishSpeling(102));
console.log(englishSpeling(103));
console.log(englishSpeling(999));

