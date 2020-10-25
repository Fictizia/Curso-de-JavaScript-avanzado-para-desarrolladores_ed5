// 5. Crear una función que utilice una expresión regular para identificar si el parámetro str que recibe es una albóndiga. Tener en cuenta que (al igual que la RAE) hay que contemplar almóndiga. Debe ser case insensitive.

const fnc = palabra => {
    const regex = /^(al[mb]óndiga)$/i;
    const checkRegex = palabra.match(regex) ? true : false;
    console.log(checkRegex);
}

fnc('AlmÓndigA');
