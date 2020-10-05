
const daysToGrow = (growSpeed, decreaseSpeed, desiredHeight) => {
  let daysToGoal = 0;
  let grow = 0;
  for(daysToGoal; daysToGoal <= desiredHeight; daysToGoal++) {
    grow += growSpeed;
    if(grow < desiredHeight) {
      grow -= decreaseSpeed;
    } else {
      return `Han pasado ${daysToGoal} días hasta alcanzar el tamaño deseado`;
    }
  }
}
console.log(daysToGrow(4,1, 100));
