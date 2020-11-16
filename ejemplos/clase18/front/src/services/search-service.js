import {set } from './cache-service.js';

export const getHeroes = async(name) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/search/${name}`);
        const respuesEnJSON = await respuesta.json();
        set(respuesEnJSON);
        return respuesEnJSON;
    } catch (ex) {
        alert(ex.message);
    }
}

export default getHeroes;
