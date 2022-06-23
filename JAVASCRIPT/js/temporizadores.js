// setInverval(<função>, <tempode disparo>)
// setInterval(disparar, 1000)

var acao = document.getElementById('resultado')

function disparar(){
  
  acao.innerHTML = 'Executando.... <br /> setInterval(disparar, 1000) <br />'
  
}


// var timer = setInterval(() => {
//   document.write("Executando!!!! <br />")
// }, 3000)

setTimeout(() => {
  console.log("Executou o timeout...")
}, 3000)