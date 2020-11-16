export const createListElement = ({
    id,
    nombre,
    heroe,
    imagen,
    onDragStart,
    onDragEnd
}) => {
    const listItem = document.createElement('li')
    listItem.classList.add('card-item')
    listItem.setAttribute('draggable', 'true')
    listItem.setAttribute('id', `${id}`)
    listItem.addEventListener('dragstart', onDragStart)
    listItem.addEventListener('dragend', onDragEnd)
    listItem.innerHTML = `
      <img class="card-image"
        data-src="${imagen}"
        src="${imagen}">
      <div class="card-content">
        <p class="card-title">${heroe}</p>
        <p class="card-text">${nombre}</p>
      </div>`
    return listItem;
}
