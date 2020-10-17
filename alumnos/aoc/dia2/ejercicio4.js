const maxDivider = (divider, limit) => {
  for(let i = divider; i > 0; i--) {
    if(divider % i === 0 && i < limit) {
      return i;
    }
  }
}


console.log(maxDivider(20,15));
