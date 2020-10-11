import { firstWordCamelcase } from './firstWordCamelCase';

function camelize(str) {
  return `${firstWordCamelcase(str).charAt(0).toLowerCase()}${firstWordCamelcase(str).slice(1)}`
}

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");