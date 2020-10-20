/*12. [HARDCORE Level] Obtener a partir del html de la página web de Fictizia los nombres y fotos de los profesores. Usar la función proporcionada para getProfesores para obtener el HTML de la web. El resultado debe ser un array de objetos. Cada objeto contendrá las propiedades nombre e imagen.*/
/*
Formato esperado
resultado = [{
  nombre: 'Fran Quesada',
  imagen: 'https://www.fictizia.com/app/images/fran-quesada.jpeg',
}]
*/

async function getProfesores() {
    const response = await fetch('https://www.fictizia.com/profesorado');
    return response.text();
}
const profesores = await getProfesores();

// Vuestro código aquí.. pruebas pruebas
// const srcRegex = /<img.*?src="(.*?)".*?alt="(.*?)">/;
// const altRegex = /<img alt=\\"(http[^"]*)\\".*/;
// const srcRegex = profesores.match(/<img.*?src="(.*?)".*?alt="(.*?)">/)
// const altRegex = profesores.match(/<img alt=\\"(http[^"]*)\\".*/)

const infoMatch = profesores.match(/<img.*?src="(.*?)".*?alt="(.*?)">/)

function infoProfes(info) {
    return [{
        nombre: info[1],
        imagen: info[2]
    }]
}

infoProfes(infoMatch);

// Solo he conseguido el primero...
// mi intención era utilizar un reduce para hacer esto, pero primero tengo que obtener el listado de nombre e imagen de profes!