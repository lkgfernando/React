

function pedir (){
  var valor = prompt("Digite um valor de 1 a 4")

  switch(Number(valor)){
    case 1:
      alert("Você escolheu a opeção 1 ------> SUCO")
      break
    case 2:
      alert("Você escolheu a opção 2 -------> ÁGUA")
      break
    case 3:
      alert("Você escolheu a opção 3 -------> CERVEJA")
      break
    case 4:
      alert("Você escolher a opção 4 -------> CHAMOU O GARÇOM")
      break
    default:
      alert("Escolha uma opção de 1 a 4")
      break
  }


}