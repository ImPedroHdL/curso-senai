
// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min


// }

// let n = getRandomInteger(0, 20)

// console.log(n)


let numeros = []
function aula2() {
    for (cont = 0; cont < 25; cont++) {
        let n = Math.ceil(Math.random() * 100)
        numeros.push(n)
    }
    console.log(numeros)
}

aula2()

let vetor = document.getElementById("divVetor")
vetor.innerHTML = ''
for (i = 0; i < numeros.length; i++) {
    vetor.innerHTML += '<br>' + numeros[i]
}
let n1, n2
function lerN1() {
    //alert("It works")
    do {

        n1 = Number(prompt("Digite o valor do N1: "))
    } while (n1 < 0 || n1 > 24)

}

function lerN2() {
    //alert("It works")
    do {

        n2 = Number(prompt("Digite o valor do N2: "))
    } while (n2 < 0 || n2 > 24)

}

let somados, somar = document.getElementById('soma')
function soma() {
    somados = (n1 + n2)
    somar.innerHTML = (somados)

}
