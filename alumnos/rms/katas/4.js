function biggerNum(divisor, limite) {
  for (let i = limite; i >= 0; i--){
      if(i%divisor == 0) {
          return i;
      }
  }
};
biggerNum(2,9);
