/**Ejercicios math */

//1
function perimetroCirculo(radio) {
    // 2PIr
    return 2 * Math.PI * radio;
}

//2
function areaCirculo(radio) {
    // πr^2
    let radioCuadrado = Math.pow(radio, 2);
    let piCuadrado = Math.pow(Math.PI, 2);
    return piCuadrado * radioCuadrado
}

//3
function hipotenusa(c1, c2) {
    // h^2 = c1^2 + c2^2
    return Math.sqrt((c1 ** 2) + (c2 ** 2))
}


/**Ejercicios strings */

//4
function repeat(str, n) {
    return str.repeat(n);
}

console.assert(repeat('Batman ', 3) === 'Batman Batman Batman ');

//5
function palabraMasLarga(str) {
    let arrStr = str.split(' ');
    let longStr = '';

    for (var i = 0; i <= arrStr.length; i++) {
        if (arrStr[i].length >= longStr.length) {
            longStr = arrStr[i];
        };
    };
    return longStr;
};

console.assert(palabraMasLarga("Erase una vez que se era") === "Erase");

//6
function ponPrimeraMayuscula(str) {
    let arrStr = str.split(' ');
    let camelCase = '';

    for (let palabra of arrStr) {
        camelCase += palabra.replace(palabra[0], palabra[0].toUpperCase()) + ' ';
    };

    return camelCase.trim();
};

console.assert(ponPrimeraMayuscula("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme")

//7
function camelize(str) {
    let arrStr = str.split(' ');
    let camelCase = '';

    for (let palabra of arrStr) {
        camelCase += palabra.replace(palabra[0], palabra[0].toUpperCase());
    };

    return camelCase;
};

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");

//8
function numberOrdinal(num) {
    let numStr = num.toString();

    switch (numStr.slice(-1)) {
        case '1':
            return `${num}st`;
        case '2':
            return `${num}nd`;
        case '3':
            return `${num}rd`;
        default:
            return `${num}th`;
    };
};

//9
function simuladorPandemia(casoSimulado) {
    let arrContinentes = casoSimulado.split('X');
    let contadorPoblacion = 0;
    let contadorContagios = 0;

    for (let continente of arrContinentes) {
        if (continente.includes('1')) {
            contadorContagios += continente.length;
        }
        contadorPoblacion += continente.length;
    };

    if (contadorPoblacion === 0) {
        return 0
    } else {
        return 100 / contadorPoblacion * contadorContagios;
    };
};