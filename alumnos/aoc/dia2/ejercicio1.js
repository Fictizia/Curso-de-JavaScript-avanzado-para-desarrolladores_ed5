const messyNumbers = [5,1,3,10,20,8,4];
const orderedNumbers = [];
let provisionalNumber = 0;


for(let i = 0; i < messyNumbers.length; i++) {
  provisionalNumber = messyNumbers[i];
  for(let j = 0; j < messyNumbers.length; j++) {
  if(provisionalNumber < j) {
    orderedNumbers.push(provisionalNumber)
  }
  }
  console.log(orderedNumbers); ;
}

//No consigo la solución
