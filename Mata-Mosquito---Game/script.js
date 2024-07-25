var altura = 0
var largura = 0
var vidas = 1
var tempo = 30

var tempoMosquito = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    tempoMosquito = 1500
} else if (nivel === 'dificil') {
    tempoMosquito = 1200
} else if (nivel === 'super-dificil'){
    tempoMosquito = 950
}

function AtualizarTamanhoPalco(){
    largura = window.innerWidth
    altura = window.innerHeight

    console.log(altura, largura)
}

AtualizarTamanhoPalco()


var cronometro = setInterval( function (){
    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(repeticao)
        window.location.href = 'vitoria.html'
    }

    document.getElementById('tempoCronometro').innerHTML = tempo
    tempo--
    
}, 1000)

function posicaoRandomica() {

    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

    if (vidas <= 3){
         document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
        vidas++
    } else {
        window.location.href = 'game_over.html'
    }
     

    }

    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = mosquitoClasse() + ' ' + ladoMosquito()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function mosquitoClasse () {
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoMosquito () {
    var lado = Math.floor(Math.random() * 2)

    switch(lado){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
