// function numPrimo() {
//     let numero = Number(prompt("Digite o número desejado: "))
//     let cont = 2
//     let divisores = 0

//     while (cont < numero) {

//         if (cont % numero == 0) {
//             divisores++

//         }
//         cont++
//     }

//     if (divisores == 0) {
//         console.log("Primo")
//     } else {
//         console.log("Não Primo")

//     }
// }

// function musica() {
//     let tempoMusica, nomeMusica
//     let totalTempo = 0
//     let horas = 0

//     do {
//         tempoMusica = Number(prompt("Digite o tempo da música: "))
//         if (tempoMusica > 0) {
//             nomeMusica = prompt("Nome da música: ")
//             totalTempo += tempoMusica
//         }
//     } while (tempoMusica != 0)

//     console.log(`A soma dos tempos é de ${totalTempo}`)


//     while (totalTempo >= 60) {
//         totalTempo -= 60
//         horas++
//     }
//     minutos = totalTempo
//     console.log(`${horas}:${minutos}`)
// }

// let i

// i = 0
// while (i < 10) {
//     console.log(`I ${i}`)
//     i++
// }

// console.log("Agora com 'FOR'\n")

// for (i = 0; i < 10; i++) {
//     console.log(`I ${i}`)
//}

let sorteado = Math.random() * 100
let tentativas = 0
restante = 10


let praCima = Math.ceil(sorteado.toFixed(0))
let praBaixo = Math.floor(sorteado)
let melhor = Math.round(sorteado)

// console.log(`Número sorteado ${sorteado.toFixed(0)}`)
// console.log(`Um número pra cima ${praCima}`)
// console.log(`Um número pra baixo ${praBaixo}`)
// console.log(`Melhor número ${melhor}`)

let chute = Number(prompt("Digite o número do chute: "))
if (chute == sorteado){
    restante--
    tentativas++
    console.log(`Parabéns, você acertou com ${tentativas}(s)`)
} else {
    if (chute > sorteado){
        console.log(`Você errou!\nSeu chute foi acima!\nVocê ainda tem ${restante} tentativa(s) restante(s)!`)
    }else {
        if (chute < sorteado){
            console.log(`Você errou!\nSeu chute foi abaixo do sorteado`)
        }
    }


}