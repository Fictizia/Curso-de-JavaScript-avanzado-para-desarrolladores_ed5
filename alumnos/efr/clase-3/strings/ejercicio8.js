// Crea una función que reciba un número y devuelva un string con formato 
// ordinal inglés. Esto es:
// acaba en 1 --> 301st
// acaba en 2 --> 302nd
// acaba en 3 --> 303rd
// cualquier otra cosa --> 300th

function getOrdinalNumber(num) {
    const stringNumber = num.toString()
    const lastLetter = stringNumber.slice(-1)
    let ordinalEnd = ''
    switch(lastLetter){
        case '1':
            ordinalEnd = 'st'
            break;
        case '2':
            ordinalEnd = 'nd'
            break;
        case '3':
            ordinalEnd = 'rd'
            break;
        default:
            ordinalEnd = 'th'
    }
    return stringNumber + ordinalEnd
}

console.log(getOrdinalNumber(303451))
console.log(getOrdinalNumber(303452))
console.log(getOrdinalNumber(3033))
console.log(getOrdinalNumber(30756414))