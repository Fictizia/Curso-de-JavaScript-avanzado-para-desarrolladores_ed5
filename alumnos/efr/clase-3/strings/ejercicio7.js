// Crea una función que reciba un string y lo devuelva en camelCase
function camelize(str) {
    return (
        str.split(' ')
            .map((word, index) => {
                    return (
                        !index ? word.toLowerCase() : word[0].toUpperCase()+word.slice(1)
                    )
                }
            )
            .join('')
    )
}

// con for ... of 

function camelize2(str) {
    const arrayFromString = str.split(' ')
    let result = ''

    for (let i = 0; i < arrayFromString.length; i++){
        if(i=== 0){
            result += arrayFromString[0].toLowerCase()
        } else {
            result += arrayFromString[i][0].toUpperCase() + arrayFromString[i].slice(1)
        }
    }
    return result
}

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");