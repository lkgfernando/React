const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Verifica se o numero é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)


console.log("Média: " + media.toFixed(2)) //Faz arrendondamento de casa decimais 
console.log("Transforma em binário: " + media.toString(2))

console.log(typeof Number) // verifica o tipo da variavel
console.log(typeof media)

console.log("************************Erros***********************")
// Erros
console.log(7 / 0)
console.log("10" / 2)
console.log("Show" * 2)
console.log(0.1 + 0.7)
// console.log(10.toString())
console.log((10.345).toFixed(2))
console.log('2' + 3)
console.log('2' - 3)