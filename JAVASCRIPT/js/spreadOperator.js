console.log("========================1º Exemplo===========================")

let nNumeros01 = [1, 2, 3]

let nNumeros02 = [...nNumeros01, 4, 5, 6]

console.log(nNumeros02)

console.log("========================2º Exemplo===========================")

let cadPessoa = {
  nome: "Fernando",
  sobreNome: "Rodrigues",
  idade: 37,
  cargo: "Analista de Suporte"
}

let cadInfPessoais = {
  ...cadPessoa,
  endereco: "Rua Madalena pereira gomes de campos",
  numero: 61,
  bairro: "Jardim D'colores ",
  cidade: "Artur Nogueira / SP"
}

console.log(cadInfPessoais)

console.log("========================3º Exemplo===========================")

function cadUsuario(info){
  let dados = {
    ...info,
    status: "Ativo",
    inicio: "01/03/2019",
    codEmp: "0500100"

  }
  console.log(dados)
}


cadUsuario({nome: "Fernando", sobreNome: "Rodrigues", idade:37})