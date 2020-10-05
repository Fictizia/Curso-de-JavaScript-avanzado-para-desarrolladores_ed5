const pi = Math.PI;
const perimetroCirculo = r => 2*pi*r;

const areaCirculo = r => pi *r**2;

const hipotenusa = (c1,c2) => Math.sqrt(c1**2 + c2**2);

//Ej4

const repeat = (str,n) => str.repeat(n);

//Ej5

const palabraMasLarga = str => {
    const array = str.split(' ');
    let max = '' ;
    for(const word of array){
        if(word.length > max.length) max = word;
    }
    return max;
}

const capitalize = str => str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
//Ej6
const ponPrimeraMayuscula = str => {
    let words = str.split(' ');
    words = words.map(word => capitalize(word))
    //return words.join(' ');
    return ''.concat(...words)
}

//Ej7
const camelize = str => {
    let words = str.split(' ');
    words = words.map((word,index) => {
        if(index===0) return word.toLowerCase()
        return capitalize(word);
    })
    
    return words.join('')
}

//Ej 8 

const englishify = num => {
    const unity = num%10;
    let sufix = 'th' ;
    if(unity === 1) sufix = 'st';
    if(unity === 2) sufix = 'nd';
    if(unity === 3) sufix = 'rd';
    return `${num}${sufix}`
}

const pandemia = str => {
    let continent = str.split('X');

    continent = continent.map(item => {
        if(item.includes('1')) return true
        return false;
    })
    
    
    return continent.filter(item => item).length*100/continent.length
}