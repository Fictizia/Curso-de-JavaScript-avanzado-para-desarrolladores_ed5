export function firstWordCamelcase(str) {
  const words = str.split(' ');
  return words.map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ')
}

console.assert(firstWordCamelcase("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme")