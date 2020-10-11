
const infectedAndHealthyHumans = (data) => {
  const humans = data.split('X');
  return humans.map(humans =>
    humans.includes('1')
      ? humans.replaceAll('0', '1')
      : humans
  ).join('')
}

const totalInfectedHumans = (humans) => {
  return (humans.match(/1/g) || []).length
}

const percentageHumansInfected = (data) => {
  const totalHumans = infectedAndHealthyHumans(data);
  return totalHumans.length > 0
    ? totalInfectedHumans(totalHumans) * 100 / totalHumans.length
    : 0;
}

let data = '01000000X000X011X0X';
percentageHumansInfected(data)