function palabraMasLarga(str) {
  const words = str.split(' ');
  let largeWord = '';
  words.forEach(word => {
    if (largeWord.length < word.length) {
      largeWord = word;
    }
  });
  return largeWord;
}

console.assert(palabraMasLarga("Erase una vez que se era") === "Erase")