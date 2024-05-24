// // executar a função

// mostrarMensagem()
// mostrarMensagem()
// mostrarMensagem()
// mostrarMensagem()
// mostrarMensagem()

// // hoisting
// function mostrarMensagem() {
//     // bloco de codigos a ser executado ao chamar a função
//     alert("Seja bem vindo ao sistema")
// }



function somar(num1, num2) {
    let soma = num1 + num2
    alert(`A soma de ${num1} com ${num2} é ${soma}!`)
}
// chamar a funcao informando o valor
somar(1, 5)

function verificaDano(dano) {
    if (dano < 20) {
        alert("Dano crítico!")
    } else if (dano < 30) {
        alert("Dano catastrófico!")
    } else if (dano < 40) {
        alert("Dano mortal!")
    }
}
verificaDano(11)
verificaDano(21)
verificaDano(31)


// função que retorna algo para ser armazenado e usado posteriormente
function somarComRetorno(num1, num2) {
    let soma = num1 + num2
    return soma
}

// armazenar o retorno da função na variavel indicada
let resultado = somarComRetorno(4, 6)


// funções com valores padrão
function somaComPadrao(num1 = 0, num2 = 50) {
    let soma = num1 + num2
    // return soma
}
somaComPadrao()