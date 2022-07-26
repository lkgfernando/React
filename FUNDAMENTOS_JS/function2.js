//Armazenando função em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(5,6)

//Armazenando arrow function em uma vairivel

const soma = (a, b) => {
    return a + b
}

console.log(soma(5,6))

//Retorno implicito

const subtracao = (a, b) => a - b

console.log(subtracao(5, 6))