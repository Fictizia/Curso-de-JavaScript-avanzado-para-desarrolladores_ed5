/* 8. Crea una función que reciba un número y
devuelva un string con formato ordinal inglés. Esto es:

acaba en 1 --> 301st
acaba en 2 --> 302nd
acaba en 3 --> 303rd
cualquier otra cosa --> 300th
*/

function formatoIngles(num) {
    let stringNum = num.toString();
    let lastNum = stringNum.charAt(stringNum.length-1);
    switch(lastNum) {
        case "1":
            return num + "st";
        case "2":
            return num + "nd";
        case "3":
            return num + "rd";
        default:
            return num + "th";
    }
}

formatoIngles(301);
