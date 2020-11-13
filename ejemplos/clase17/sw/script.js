const input = document.getElementById('heroInput')
const list = document.getElementById('superHeroList')
const form = document.getElementById('heroForm')

const createListElement = ({
    nombre,
    heroe,
    imagen,
    genero,
}) => {
    const listItem = document.createElement('li')
    listItem.classList.add('card-item')
    const cardImage = document.createElement('img')
    cardImage.classList.add('card-image')
    cardImage.src = imagen
    listItem.append(cardImage)
    const cardContent = document.createElement('div')
    cardContent.classList.add('card-content')
    listItem.append(cardContent)
    const cardTitle = document.createElement('p')
    cardTitle.classList.add('card-title')
    cardTitle.innerText = heroe
    cardContent.appendChild(cardTitle)
    const cardText1 = document.createElement('p')
    cardText1.classList.add('card-text')
    cardText1.innerText = nombre
    cardContent.appendChild(cardText1)
    const cardText2 = document.createElement('p')
    cardText2.classList.add('card-text')
    cardText2.innerText = genero
    cardContent.append(cardText2)
    list.append(listItem)
}

const getHero = async(name) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/search/${name}`);
        return respuesta.json()
    } catch (ex) {
        alert(ex.message)
    }
}

const onChange = async event => {
    list.textContent = ''
    const text = event.target.value
    if (text.length < 3) {
        return;
    }
    const queryResult = localStorage.getItem(text)
    let bats
    if (queryResult) {
        console.log('Obtenido del storage')
        bats = JSON.parse(queryResult)
    } else {
        console.log('Obtenido de la API Web')
        bats = await getHero(text)
        if (bats) {
            localStorage.setItem(text, JSON.stringify(bats))
        }
    }
    bats.results.forEach(el => {
        nombre: el.biography['full-name'],
        createListElement({
            heroe: el.name,
            nombre: el.biography['full-name'],
            genero: el.appearance.gender,
            imagen: el.image.url,
        })
    })
}

input.addEventListener('submit', e => e.preventDefault())

input.addEventListener('change', onChange)
