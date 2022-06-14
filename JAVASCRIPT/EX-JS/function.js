var area = document.getElementById('area')

function enter() {
    var name = prompt("Digite seu nome")

    if(name === '' || name === null){

        alert("Ops algo deu errado")
        area.innerHTML = "Clique no botão para acessar....."

    } else {

        area.innerHTML = "Bem vindo " + name + " "

        let botaoSair = document.createElement("button")
        botaoSair.innerText = "Sair da conta"
        botaoSair.onclick = sair

        area.appendChild(botaoSair)
    }
}

function sair() {
    alert("Até mais....")
    area.innerHTML = "Você saiu"
}