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

const infoMatch = profesores.match(/<img.*?src="(.*?)".*?alt="(.*?)">/g)

function infoProfes(info) {
    let profesResult = [];
    while (info !== null) {
        profesResult.push(
        {'name': info[1],
        'imagen': info[2]});
        info = /<img.*?src="(.*?)".*?alt="(.*?)">/.exec(profesores);
    }
}

infoProfes(infoMatch);