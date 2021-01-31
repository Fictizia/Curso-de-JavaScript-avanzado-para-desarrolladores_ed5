// Crear una función que genere id's autoincrementales. Cada vez que se ejecute la función esta nos devolverá un nuevo id.
function* generaId() {
    let zeros = '000000';
    for(let i = 1; i <= 1000; i+=1) {
        let id = `E${(zeros + i).slice(-zeros.length)}`;
        yield id;
    }
    return 'final';
}
const generador = generaId();

const uno = generador.next();
console.log(uno); // E000001