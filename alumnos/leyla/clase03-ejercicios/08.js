// Crea una función que reciba un número y devuelva un string con formato ordinal inglés. Esto es:
// acaba en 1 --> 301st

// acaba en 2 --> 302nd

// acaba en 3 --> 303rd

// cualquier otra cosa --> 300th

function ordinalIngles(num) {
    let ultimo = num.toString().slice(-1);
    
    switch(ultimo) {
        case "1":
            return `${num}st`
        case "2":
            return `${num}nd`
        case "3":
            return `${num}rd`
        default:
            return `${num}th`
        
    }
}

console.assert(ordinalIngles(301) === "301st")
console.assert(ordinalIngles(302) === "302nd")
console.assert(ordinalIngles(303) === "303rd")
console.assert(ordinalIngles(300) === "300th")