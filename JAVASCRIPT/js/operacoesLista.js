//MAP PERCORRE TODO UM ARRAY
console.log("===================Map========================")

let lista = ["FERNANDO", "KAUAN", "GLACIELI", "LIVIA MARIA"]

lista.map((item, index) => {
  console.log(`Passado: ${item} - Está na posição ${index}`)
})

console.log("===================Reduce========================")

//Reduce = O reduce busca reduzir um array

let numeros = [5, 3, 2, 5]

let total = numeros.reduce((acumulador, numero, indice, original) => {
  console.log(`${acumulador} - total até o momento`)
  console.log(`${numero} - valor atual`)


  return acumulador += numero
})

console.log("======================Find======================") //Fazer uma busca 

let listagem = ["Morango", "Abacaxi", "Leite", "Pão", "Café", "Morango"]

let busca = listagem.find((item) => {
  if(item === "Morango") {
    return item === "Morango"
  }
})

console.log(busca)


console.log("======================Filter====================")

let listagem2 = ["Cola", "Sabonete", "Amaciante", "Picanha", "Cola", "Uva"]

let result = listagem2.filter((item) => {
  return item.length > 5
})

console.log(result)

console.log("=======================includes===================")

let nomes = ["Fernando", "Kauan", "Livia"]

console.log(nomes.includes("Fernando")) //Verifica se o Fernando está no array

if(nomes.includes("Livia")){
  nomes.map((item) => {
    if(item === "Livia"){
    console.log(`${item}`)
    }
  })
  console.log("Nome encontrado na lista")
}else{
  console.log("Não está lista")
}

console.log(`=======================startWith==================`) //Usado para procurar dentro de uma vairial 
//endWith encontra a parte final de uma variavel 

let nome05 = "Fernando Jose Rodrigues"
if(nome05.startsWith("Fernando")){
  console.log("Sim o primeiro nome começa com Fernando")
}
console.log(`======================endsWith====================`)
console.log(`Pesquisa se o ultimo nome é Rodrigues`)
console.log(nome05.endsWith("Rodrigues"))