

/*
Formula de calcular IMC
peso / (altura * altura)


*/

var peso = 0
var altura = 0
var imc = 0
var resultado = 0


function calcular(event) {
  event.preventDefault()

  peso = document.getElementById('peso').value
  altura = document.getElementById('altura').value

  imc = peso / (altura * altura)
  resultado = document.getElementById('resultado')

  if(imc < 17){
        
    resultado.innerHTML = '<br /> Seu resultado foi: ' + imc.toFixed(2) + '<br /> Cuidado vodê está muito abaixo do peso'

  } else if (imc > 17 && imc < 18.49){
        
    resultado.innerHTML = '<br /> Seu resultado foi: ' + imc.toFixed(2) + '<br /> Você está abaixo do peso'

  } else if (imc > 18.5 && imc < 24.99){

    resultado.innerHTML = '<br /> Seu resultado foi: ' + imc.toFixed(2) + '<br /> Você está com peso ideal'

  } else if (imc > 25 && imc <= 29.99 ){
    
    resultado.innerHTML = '<br /> Seu resultado foi: ' + imc.toFixed(2) + '<br /> Você está com acima do peso'
  
  } else {
  
    resultado.innerHTML = '<br /> Seu resultado foi: ' + imc.toFixed(2) + '<br /> Você está com Obsidade'

  }

  document.getElementById('peso').value = ''
  document.getElementById('altura').value = ''

}