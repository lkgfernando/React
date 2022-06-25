let pessoa = {
  nome: "Fernando",
  sobrenome: "Rodrigues",
  empresa: "Sujeito Programador",
  cargo: "Programador FullStack" 
}

console.log("----------------------- 1º Exemplo -----------------------------------------")
console.log(pessoa)

const {nome, cargo, empresa, sobrenome} = pessoa

const {nome:nomePessoa, cargo:cargoPessoa, empresa:empresaPessoa, sobrenome:sobrenomePessao} = pessoa //Renomeia a propriedade

console.log(cargo)
console.log(sobrenome)
console.log(nome)
console.log(`Renomeado ${cargoPessoa}`)
console.log(empresaPessoa)

console.log("----------------------- 2º Exemplo -----------------------------------------")

let nome2 = ["Fernando","Livia Maria","Kauan Sabaini"]

let {0:nome01, 1:nome02, 2:nome03} = nome2


console.log(nome02)
console.log(nome03)

console.log("----------------------- 3º Exemplo -----------------------------------------")

let frutas = ["Morango", "Abacaxi", "Kiwi", "Frutas Vermelhas"]

let [ cFruta01, cFruta02, cFruta03, cFruta04 ] = frutas

console.log(cFruta02)
console.log(cFruta04)