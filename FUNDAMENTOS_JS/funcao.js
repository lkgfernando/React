function imprimirSoma(a, b){
    console.log(a + b)
}


imprimirSoma(5, 6)
imprimirSoma(2)
imprimirSoma(2, 3, 7, 8, 9)
imprimirSoma()


//funcao com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2))
console.log(soma(5,6))
console.log(soma())
