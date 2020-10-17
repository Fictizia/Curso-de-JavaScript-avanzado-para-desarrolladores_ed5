
async function getProfesores() {
  const response = await fetch('https://www.fictizia.com/profesorado');
  return response.text();
}
const profesores = await getProfesores();


const articleRegex = /(<\s*article[^>]*>(.|\n)*?<\s*\/\s*article>)/gm
const imageRegex = /(<img.*?src="(.*?)".*?alt="(.*?)")/

const articlesElements = profesores.match(articleRegex)

const teachers = articlesElements.map(articleElement => {
  const imageData = articleElement.match(imageRegex)
  return {
    name: imageData[3],
    image: imageData[2]
  }
})

console.log(teachers)