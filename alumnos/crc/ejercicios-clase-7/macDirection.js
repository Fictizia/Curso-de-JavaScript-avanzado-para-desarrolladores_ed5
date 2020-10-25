const regexMacAddress = /([0-9A-Fa-f]{2}[:]){5}([0-9A-Fa-f]{2})$/

function checkMacAddress(macAddress) {
  return regexMacAddress.test(macAddress);
}

checkMacAddress('01:32:54:67:89:AB') // true
checkMacAddress('0132546789AB') // false
checkMacAddress('01:32:54:67:89') // false
checkMacAddress('01:32:54:67:89:ZZ') // false