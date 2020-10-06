function ordinalNumber(num) {
  const lastchar = num.toString().slice(-1);
  const ordinal = {
    '1': 'st',
    '2': 'nd',
    '3': 'rd',
  }
  return ordinal[lastchar] ? `${num}${ordinal[lastchar]}` : `${num}th`
}