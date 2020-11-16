export const formatHero = (index, hero) => ({
    id: `cardItem${index}`,
    heroe: hero.name,
    nombre: hero.biography['full-name'],
    imagen: hero.image.url,
})
