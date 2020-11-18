import { formatHero } from "./formatter.js"
import { createListElement } from './templates.js';
import getHeroes from "./services/search-service.js";
import {get as getFromCache } from "./services/cache-service.js";

const input = document.getElementById('heroInput')
const submitButton = document.getElementById('submitButton')
const list = document.getElementById('superHeroList')
const removeZone = document.getElementById('removeZone')
const errorContainer = document.getElementById('lo ')

const onDragStart = function(event) {
    removeZone.classList.add('dragging')
    event.dataTransfer.setData('text/plain', this.id);
}

const onDragEnd = () => {
    removeZone.classList.remove('dragging')
    removeZone.classList.add('removing')
}

const onDragEnter = (event) => {
    event.preventDefault()
    removeZone.classList.add('removing')
}

const onDragLeave = () => {
    removeZone.classList.remove('removing')
}

const onDragOver = (event) => {
    event.preventDefault()
}

const onDrop = (event) => {
    const el = document.getElementById(event.dataTransfer.getData('text/plain'));
    el.parentNode.removeChild(el)
    removeZone.classList.remove('removing')
    event.stopPropagation()
}

const onError = (error) => {

}

const onChange = async event => {
    list.textContent = ''
    const text = event.target.value
    if (text.length < 3) {
        return;
    }
    let heroes = getFromCache(text)
    if (heroes && !heroes.length) {
        heroes = await getHeroes(text);
    }
    if (heroes.error) {
        onError(heroes);
    } else {
        heroes.results.forEach((el, index) => {
            const createListElementInput = {
                ...formatHero(index, el),
                onDragStart,
                onDragEnd
            }
            const listItem = createListElement(createListElementInput);
            list.append(listItem);
        })
    }
}

const registerEventListeners = () => {
    removeZone.addEventListener('dragenter', onDragEnter)
    removeZone.addEventListener('dragleave', onDragLeave)
    removeZone.addEventListener('dragover', onDragOver)
    removeZone.addEventListener('drop', onDrop)

    input.addEventListener('submit', e => e.preventDefault())

    input.addEventListener('change', onChange)
}

export default registerEventListeners;
