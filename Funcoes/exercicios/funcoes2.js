let casamento = function (nomeConvidado, data, horario, local, nomeNoivos) {
    console.log(`Olá, ${nomeConvidado}, é com imenso prazer que o convidamos para a festa de casamento de ${nomeNoivos}, no local de ${local}, no horário ${horario}, na data de ${data}, por favor, contamos com sua presença!`)
}

function att1() {
    let nomeConvidado = prompt("Olá, qual o seu nome? ")
    let data = "31/02/2029"
    let local = "Santorini, Grécia"
    let horario = "19h"
    let nomeNoivos = ["Ele", "Ela"].join(" ")

    casamento(nomeConvidado, data, local, horario, nomeNoivos)
}

function att2() {
    let numeros = []
    for (i = 0; i < 10; i++)
        numeros.push(i)

    verificaImpares = numeros.every(function (impares) {
        return impares % 2 != 0
    })
    console.log(`Todos números são impares? ${verificaImpares}`)
}

function att3() {
    let numeros = []
    for (i = 0; i < 10; i++)
        numeros.push(i)

    let numerosAoQuadrado = numeros.map(function (quad) {
        return quad ** 2
    })
    console.log(`Os números ${numeros.join(" ")} ao quadrado são ${numerosAoQuadrado.join(" ")}`)
}

function att4() {
    let numeros = []
    for (i = 0; i < 10; i++)
        numeros.push(i)

    let timePar = numeros.filter(function (par) {
        return par % 2 == 0
    })

    let timeImpar = numeros.filter(function (impar) {
        return impar % 2 == 1
    })

    console.log(`O time 1 terá os jogadores de numero ${timePar.join(", ")} e o time 2 terá os jogadores de número ${timeImpar.join(", ")}`)

}

function att5() {
    let idades = []
    for (i = 0; i < 5; i++) {
        let idade = Number(prompt("Digite uma idade!"))
        idades.push(idade)
    }
    let maiorQue18 = idades.every(maior => {
        return maior >= 18
    })
    console.log(`Todos são maiores de idade? ${maiorQue18}\nAs idades informadas foram ${idades.join(" ")}`)
}

function att6() {
    let precos = []
    let min = 0
    let max = 100
    for (i = 0; i < 5; i++) {
        let preco = Math.floor(Math.random() * (max - min + 1)) + min
        precos.push(preco)
    }
    let menorQue50 = precos.filter(menor => {
        return menor < 50
    })
    console.log(`Os valores menores que R$50,00 são: ${menorQue50.join(" ")}`)
}

function att7() {
    let numeros = []
    for (i = 0; i < 5; i++) {
        let numero = Number(prompt("Digite um valor qualquer! "))
        numeros.push(numero)
    }
    numeros.sort()
    let maiorValor = numeros.reduce((maior, atual) => {
        return atual > maior ? atual : maior
    }, numeros[0])
    console.log("O maior valor é:", maiorValor)
}