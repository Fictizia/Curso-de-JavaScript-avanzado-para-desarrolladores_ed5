// 3. Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos (Teorema de pitagoras).
// h^2 = c1^2 + c2^2

const hipotenusa = (c1, c2) => (Math.sqrt((c1 * c1) + (c2 * c2)));

hipotenusa(1, 2); // 2.23606797749979