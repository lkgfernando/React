//Rest Operator
console.log("===============================1º Exempolo Lista de convidados===============")
function convidados (...lista){
  console.log("Lista de Convidados")
  console.log(lista)
}


convidados("Fernando", "Kauan", "Livia", "Glacieli")

console.log("===============================2º Gerado de numeros aleatório===============")

function geradorNumero(...numeros){
  console.log(numeros)
  
  
  
  for (let x = 0; x < numeros.length; x++) {
    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log( numeros[numeroGerado])

  }
  

  
}


geradorNumero(1, 10, 15, 5, 22, 7, 8, 16, 100, 501, 1100)

