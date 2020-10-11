const pi = Math.PI;
const getRandomNumber = max => Math.trunc(Math.random() * max) + 1;
const randomPositiveNumber = getRandomNumber(20);
const randomNegativeNumber = getRandomNumber(-20);

/** 
 * Ej 1
 * circumferecePerimeter Calcula la longitud (o perímetro) de una circunferencia a partir de su radio.
 * @param {* positive number } r Radio de la circunferencia.
 */

const circumferecePerimeter = r => r > 0 ? 2 * pi * r : 'The radius must be a positive number';

console.log(circumferecePerimeter(3) === 18.84955592153876);
console.log(circumferecePerimeter(6) === 37.69911184307752);
console.log(circumferecePerimeter(randomNegativeNumber) === 'The radius must be a positive number');
console.log(circumferecePerimeter(0) === 'The radius must be a positive number');

/** 
 * Ej 2
 * circleArea Calcula el área de un círculo a partir de su radio.
 * @param {* positive number } r Radio de la circunferencia.
 */

const circleArea = r => r > 0 ? pi * r**2 : 'The radius must be a positive number';

console.log(circleArea(2) === 12.566370614359172);
console.log(circleArea(8) === 201.06192982974676);
console.log(circleArea(randomNegativeNumber) === 'The radius must be a positive number');
console.log(circleArea(0) === 'The radius must be a positive number');

/** 
 * Ej 3
 * hypotenuse Calcula la hipotenusa de un triángulo rectángulo a partir de sus catetos.
 * @param {* positive number} c1 Cateto 1 del triángulo.
 * @param {* positive number} c2 Cateto 2 del triángulo.
 */

const hypotenuse = (c1, c2) => c1 * c2 > 0 ? Math.sqrt(c1**2 + c2**2) : 'The legs must be positive numbers';

console.log(hypotenuse(1, 2) === 2.23606797749979);
console.log(hypotenuse(randomNegativeNumber, randomPositiveNumber) === 'The legs must be positive numbers');
console.log(hypotenuse(randomPositiveNumber, randomNegativeNumber) === 'The legs must be positive numbers');
console.log(hypotenuse(randomNegativeNumber, 0) === 'The legs must be positive numbers');
console.log(hypotenuse(randomPositiveNumber, 0) === 'The legs must be positive numbers');
console.log(hypotenuse(0, randomPositiveNumber) === 'The legs must be positive numbers');
console.log(hypotenuse(0, randomNegativeNumber) === 'The legs must be positive numbers');
console.log(hypotenuse(0, 0) === 'The legs must be positive numbers');

/** 
 * Ej 4
 * cloneStringNTimes Dados una palabra y un número n, devuelve esa palabra repetida n veces. 
 * @param {* string } str Palabra a repetir.
 * @param {* non negative number } n Número de veces que se debe repetir la palabra.
 */

const cloneStringNTimes = (str, n) => n >= 0 ? str.repeat(n) : 'n must be a non negative number';

console.log(cloneStringNTimes('Batman ', 3) === 'Batman Batman Batman ');
console.log(cloneStringNTimes('Batman ', 0) === '');
console.log(cloneStringNTimes('Batman ', randomNegativeNumber) === 'n must be a non negative number');


/** 
 * Ej 5
 * longestWord Dada una frase, devuelve la palabra más larga
 * @param {* string } sentence Frase inicial
 */

const longestWord = sentence => {
    const words = sentence.split(' ');
    let longestWord = '' ;
    words.forEach(word => {
        if(word.length > longestWord.length) longestWord = word;
    });  
    return longestWord;
}

console.log(longestWord("Erase una vez que se era") === "Erase");
console.log(longestWord("") === "");
console.log(longestWord("que palabra es más larga? palabra1 o palabra2") === "palabra1")


/** 
 * Ej 6
 * setFirsUpperCase Dada una frase, devuelve la misma frase con todas sus palabras con la primera letra mayúscula.
 * @param {* string } sentence Frase original
 */

const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();

const setFirsUpperCase = sentence => {
    let words = sentence.split(' ');
    words = words.map(word => capitalize(word));
    return words.join(' ');
};

const setFirsUpperCase2 = sentence => {
    let words = sentence.split(' ');
    return words.reduce((newSentence, word) => newSentence += `${capitalize(word)} `,'').trimRight();
};

console.log(setFirsUpperCase("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme");
console.log(setFirsUpperCase2("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme");


/** 
 * Ej 7 
 * camelize Dada una frase, la devuelve en camelCase
 * @param {* string } sentence Frase original
 */

const camelize = sentence => {
    let words = sentence.split(' ');  
    return words
        .map((word,index) => {
            if(index === 0) return word.toLowerCase();
            return capitalize(word); //capitalize is defined on line 84
        })
        .join('');
};

const camelize2 = sentence => {
    let words = sentence.split(' ');
    return words.reduce((newSentence, word, wordIndex) => wordIndex === 0 ? newSentence += word.toLowerCase() : newSentence += capitalize(word), '');
}

console.log(camelize("Hola a todos que tal") === "holaATodosQueTal");
console.log(camelize2("Hola a todos que tal") === "holaATodosQueTal");


/**
 * Ej 8
 * ordinalIndicator A partir de un número, devuelve un string con formato ordinal inglés
 * @param {* number } num 
 */

const ordinalIndicator = num => {
    const getSuffix = n => {
        const ones = n % 10;
        const tens = Math.floor(n % 100 /10);
        if (tens === 1) return 'th';
        let suffixes = {
            1 : 'st',
            2 : 'nd',
            3 : 'rd'
        };
        return suffixes[ones] || 'th';
    };

    let suffix = getSuffix(num);
    return `${num}${suffix}`;
};

console.log(ordinalIndicator(301) === '301st');
console.log(ordinalIndicator(302) === '302nd');
console.log(ordinalIndicator(303) === '303rd');
console.log(ordinalIndicator(313) === '313th');
console.log(ordinalIndicator(84) === '84th');
console.log(ordinalIndicator(11) === '11th');


/**
 * Ej 9
 * Vamos a emular una "posible" pandemia. El mundo se representará como un string 
 * como el siguiente: 01000000X000X011X0X 
 * Donde los valores representan lo siguiente:
 * '0': no contagiado
 * '1': contagiado
 * 'X': océano
 * Tenemos que calcular el porcentaje de personas contagiadas en el mundo.
 * Para ello tenemos que tener en cuenta lo siguiente:
 * El virus no se puede propagar por el océano.
 * Si una persona se contagia en un continente todas las personas se contagian en ese continente.
 * Los continentes no están conectados por los extremos
 * Ej: antes de la pandemia 01000000X000X011X0X
 * después de la pandemia 11111111X000X111X0X
 * total de personas 15 (total de unos y ceros)
 * total de infectados 11 (total de unos)
 * Devolver el porcentaje 11 * 100 / 15 
 * @param {* string } worldSituation 01000000X000X011X0X
 */

const percentageInfectedAfterPandemia = worldSituation => {
    const initialContinents = worldSituation.split('X').filter(continent => continent.length);
    if( initialContinents.length === 0 ) return 0;
  
    let totalPeople = 0;
    let totalInfected = 0;
  
    for(const continent of initialContinents){
        const isThereAtLeastOneInfected = continent.includes('1');
        if(isThereAtLeastOneInfected){
            totalInfected += continent.length;
        }
        totalPeople += continent.length;
    }
  
    return totalInfected * 100/ totalPeople;
};

const percentageInfectedAfterPandemia2 = worldSituation => {
    const continents = worldSituation.split('X').filter(continent => continent.length);
    
    let totalPeople = continents.join('').length;
    if( totalPeople === 0 ) return 0;
    
    let totalInfected = continents.reduce((infectedAccumulator, continent) => {
        if(continent.includes('1')) infectedAccumulator += continent.length;
        return infectedAccumulator;
    }, 0);
    
    return totalInfected * 100/ totalPeople;
};

console.log(percentageInfectedAfterPandemia('01000000X000X011X0X') === 73.33333333333333);
console.log(percentageInfectedAfterPandemia('01X000X010X011XX') === 72.72727272727273);
console.log(percentageInfectedAfterPandemia('XXXXX') === 0);
console.log(percentageInfectedAfterPandemia('0000000010') === 100);
console.log(percentageInfectedAfterPandemia('X00X000000X10X0100') === 42.857142857142854);

console.log(percentageInfectedAfterPandemia2('01000000X000X011X0X') === 73.33333333333333);
console.log(percentageInfectedAfterPandemia2('01X000X010X011XX') === 72.72727272727273);
console.log(percentageInfectedAfterPandemia2('XXXXX') === 0);
console.log(percentageInfectedAfterPandemia2('0000000010') === 100);
console.log(percentageInfectedAfterPandemia2('X00X000000X10X0100') === 42.857142857142854);