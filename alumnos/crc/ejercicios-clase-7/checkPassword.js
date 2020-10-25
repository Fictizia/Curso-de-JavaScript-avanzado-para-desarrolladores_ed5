class ValidatorString {

  containNumberOfCharsOrMore(string, numberOfChars) {
    return string.length >= numberOfChars
  }

  containNumberOfCharsOrLess(string, numberOfChars) {
    return string.length <= numberOfChars
  }

  containLowerCase(string) {
    return (/[a-z]/.test(string))
  }

  containUppercase(string) {
    return (/[A-Z]/.test(string))
  }

  containNumber(string) {
    return (/[0-9]/.test(string))
  }

  containSymbol(string) {
    return (/[^\w!@£]/.test(string))
  }

}

const validatorString = new ValidatorString()

const MIN_CHARS = 8
const MAX_CHARS = 16

function passwordValidator(string) {
  const validators = [
    {
      validate: validatorString.containLowerCase(string),
      message: `Min. one lowercase char.`
    },
    {
      validate: validatorString.containUppercase(string),
      message: `Min. one uppercase char.`
    },
    {
      validate: validatorString.containNumber(string),
      message: `Min. one number char.`
    },
    {
      validate: validatorString.containSymbol(string),
      message: `Min. one symbol ex:&/{}()/... char.`
    },
    {
      validate: validatorString.containNumberOfCharsOrMore(string, MIN_CHARS),
      message: `Min. chars ${MIN_CHARS}.`
    },
    {
      validate: validatorString.containNumberOfCharsOrLess(string, MAX_CHARS),
      message: `Max. chars ${MAX_CHARS}.`
    },
  ].find(({ validate }) => !validate)

  return validators
    ? validators
    : { validate: true, message: 'Correct password.' }
}

passwordValidator('asdas') // {validate: false, message: "Min. one uppercase char."}
passwordValidator('asdasA') // {validate: false, message: "Min. one number char."}
passwordValidator('asdasA') // {validate: false, message: "Min. one symbol ex:&/{}()/... char."}
passwordValidator('asdaA7%') // {validate: false, message: "Min. chars 8."}
passwordValidator('asdaA7%iu') // {validate: true, message: "Correct password."}
passwordValidator('asdaA7%iuAsdasdas') // {validate: false, message: "Max. chars 16."}