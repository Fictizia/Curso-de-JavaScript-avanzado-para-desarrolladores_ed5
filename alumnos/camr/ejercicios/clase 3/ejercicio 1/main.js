"use strict";

function getCirclePerimeter(radio) {
  return Math.PI * radio * 2;
}
console.assert(getCirclePerimeter(3) === 18.84955592153876);
console.assert(getCirclePerimeter(6) === 37.69911184307752);
