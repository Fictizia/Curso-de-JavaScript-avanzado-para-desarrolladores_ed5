/**
 * [HARDCORE Level] Obtener a partir del html de la página web de Fictizia los nombres y fotos 
 * de los profesores. Usar la función proporcionada para getProfesores para obtener el HTML de 
 * la web. El resultado debe ser un array de objetos. Cada objeto contendrá las propiedades nombre 
 * e imagen.
 */

const regexName = /<h3>([A-Z][a-z]+ [A-Z][a-z]+)<\/h3>/g
const regexURL= /(https:\/\/www.fictizia.com\/app\/images\/[a-z]+[-][a-z]+.jpeg)/g
let profesoresObject= [];

async function getProfesores() {
    const response = await fetch('https://www.fictizia.com/profesorado');
    return response.text();
}
const profesores = await getProfesores();

let resultURL = regexURL.exec(profesores);
let resultName = regexName.exec(profesores);
while (resultName !== null && resultURL !== null) {
  profesoresObject.push(
    {'name': resultName[1], 
    'imagen': resultURL[1]});
   resultURL = regexURL.exec(profesores);
   resultName = regexName.exec(profesores);
}
console.log(profesoresObject)