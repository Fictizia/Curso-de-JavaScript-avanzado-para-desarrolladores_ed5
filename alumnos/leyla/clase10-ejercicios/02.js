// Vamos a listar los superheroes de la familia Batman. Para ello usaremos la siguiente API: https://www.superheroapi.com.
// De cada super heroe mostraremos su nombre de super heroe, su nombre real, su género y su imagen. Si tuviera un alias también lo mostraríamos.
import { key } from 'key.js';

function getFamily(name){
    const url = `https://superheroapi.com/api/${key}/search/${name}`;

    fetch(url)
    .then(async response => {
        const res = await response.json();
        const data = res.results;
        let heroes = [];

        for(let i = 0; i < data.length; i+=1) {
            let hero = {
                "name": data[i].name,
                "fullname": data[i].biography['full-name'],
                "gender": data[i].appearance.gender,
                "image": data[i].image.url,
                "aliases": data[i].biography.aliases
            }
            heroes.push(hero);
        }
        console.info(heroes);
    })
    .catch(error => {
        console.error(error)
    })
}

getFamily('batman');
