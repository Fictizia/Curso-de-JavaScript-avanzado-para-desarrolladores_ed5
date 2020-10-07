const treeGrowing = (grow, shrink, desiredHeight) => {
  let height = 0;
  let days = 0;
  let nights = 0;
  while (height < desiredHeight) {
    height += grow;
    days++;
    if (height < desiredHeight) {
      height -= shrink;
      nights++;
    }
    //esta condición no hace falta
    // else {
    //   break;
    // }
  }
  return `Tu árbol tardará en llegar ${desiredHeight} metros ${days} días y ${nights} noches`;
};

console.log(treeGrowing(1, 0.5, 2)); //return 3 days and 2 nights
console.log(treeGrowing(0.09, 0.02, 168)); //return 2400 days and 2399 nights
