function numeros(numero, dia) {
  const death = String.fromCodePoint(0x1F480);
  const heart = String.fromCodePoint(0x1F49A);

  if((dia == 'lunes' && numero == 12)
  || (dia == 'martes' && numero > 95)
  || (dia == 'miercoles' && numero == 34)
  || (dia == 'jueves' && numero == 0)
  || (dia == 'viernes' && numero%2 == 0)
  || (dia == 'viernes' && numero%2 == 0)
  || (dia == 'sabado' && numero == 56)
  || (dia == 'domingo' && (numero == 666 || numero == -666)))  {
      console.log('número odiado! ' + death);
  } else {
      console.log('no odiado! ' + heart);
  }
};
numeros(14, 'lunes');
