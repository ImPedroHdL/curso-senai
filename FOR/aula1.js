function att1() {
    for (let cont = 0, soma = 0, num; cont < 5; cont++) {
        let for1 = document.getElementById(`for1`)
        num = Number(prompt("Digite um numero qualquer: "))
        if (num > 7) {
            soma += num
        }
        for1.innerHTML = (`A soma dos valores é ${soma}`)
    }
}

function att2() {
    for (cont = 0; cont <= 201; cont++) {
        //let for2 = document.getElementById(`for2`)
        if (cont % 2 == 0) {
            console.log(`Os pares são: ${cont}\n`)
        }
    }
}

function att3() {
    let soma = 0
    for (cont = 10; cont <= 20; cont++) {
        soma = soma + cont
        console.log(`A soma de todos os números de 10 a 20 é de ${soma}`)

    }
}

function att4() {
    let num = Number(prompt("Digite um numero qualquer: "))
    soma = 0
    for (let cont = 0; cont <= num; cont++) {
        soma += cont
    }
    alert(soma)
}
function att5() {
    qtdMultas = Number(prompt(`Quantas multas deseja cadastrar? `))
    let somaM = 0
    somaP = 0

    for (cont = 0; cont < qtdMultas; cont++) {
        //Solicita informações 
        vlrMulta = Number(prompt("Digite o valor da multa: "))
        qtdPontos = Number(prompt("Quantos pontos? "))
        //Acumular valores
        somaM += vlrMulta
        somaP += qtdPontos
    }
    //Exibir as somas
    console.log(`A soma dos pontos é de ${somaP} e a soma dos valores é de ${somaM}!`)

    if (somaP > 20) {
        console.log(`Você está irregular!`)
    } else {
        console.log(`Você está dentro da pontuação!`)
    }

}

function att6() {
    soma = 0
    media = 0
    impar = false
    alert("Média de numeros pares!")
    for (cont = 0; cont < 5; cont++) {
        //Pede para informar um valor
        num = Number(prompt("Digite um número!"))
        if (num % 2 == 1) { // Se digitar um numero primo já interrompe o loop
            alert("Um dos números digitados é Impar, por isso não foi possível terminar a operação!")
            impar = true
            break
        } else {
            soma += num
        }
    }
    if (impar == false) {

        media = soma / 5
        alert(`A média dos valores informados é de ${media.toFixed(2)}`)
    }
}