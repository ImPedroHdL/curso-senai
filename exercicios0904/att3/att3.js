function att3() {
    let diaMes = document.getElementById("diaMes")

    alert("Digite o valor correspondente ao mês desejado: ")

    let mes = Number(prompt("1) Janeiro\n2)Fevereiro\n3)Março\n4)Abril\n5)Maio\n6)Junho\n7)Julho\n8)Agosto\n9)Setembro\n10))Outubro\n11)Novembro\n12)Dezembro"))

    switch (mes) {

        case 1:
            diaMes.innerHTML = "Janeiro tem 31 dias"
            break

        case 2:
            diaMes.innerHTML = "Fevereiro tem 28 dias"
            break

        case 3:
            diaMes.innerHTML = "Março tem 31 dias"
            break

        case 4:
            diaMes.innerHTML = "Abril tem 30 dias"
            break

        case 5:
            diaMes.innerHTML = "Maio tem 31 dias"
            break

        case 6:
            diaMes.innerHTML = "Junho tem 30 dias"
            break

        case 7:
            diaMes.innerHTML = "Julho tem 31 dias"
            break

        case 8:
            diaMes.innerHTML = "Agosto tem 31 dias"
            break

        case 9:
            diaMes.innerHTML = "Setembro tem 30 dias"
            break

        case 10:
            diaMes.innerHTML = "Outubro tem 31 dias"
            break

        case 11:
            diaMes.innerHTML = "Novembro tem 30 dias"
            break

        case 12:
            diaMes.innerHTML = "Dezembro tem 31 dias"
            break

        default:
            diaMes.innerHTML = "Numero invalido!"
    }
}

function att4() {

    let banco = document.getElementById("banco")

    let numeroConta = Number(prompt("Digite o numero da sua conta!"))
    let escolha = Number(prompt("Digite o numero da opção desejada: \n1)Saldo\n2)Depósito\n3)Saque "))
    let saldo = Number(500)

    switch (escolha) {

        case 1:

            banco.innerHTML = `Seu saldo é de: ${saldo}`
            break

        case 2:
            let deposito = Number(prompt("Qual o valor do depósito?"))
            saldo += deposito
            banco.innerHTML = `Seu saldo atual é de ${saldo}`
            break

        case 3:
            let saque = Number(prompt("Qual o valor do saque? "))
            if (saque > saldo) {
                banco.innerHTML = "Saldo insuficiente!"
            } else {
                saldo -= saque
                banco.innerHTML = `Seu saldo após o saque é de ${saldo}`
            }
            break

        default:
            banco.innerHTML = "Numero invalido!"
    }
}

function att5() {
    let ecommerce = document.getElementById("ecommerce")

    let valor = Number(prompt("Digite o valor da sua compra! "))
    let assign = Number(prompt("Qual o seu nivel de assinatura: \n1)Assinante Premium\n2)Assinante Gold\n3)Assinante Silver\n4)Não Assinante"))
    let frete = Number(12.5)

    switch (assign) {

        case 1:
            let valorPremium = valor * 0.20
            valor -= valorPremium
            frete -= frete
            ecommerce.innerHTML = `O valor total final é de ${valor} e ${frete} de frete!`
            break

        case 2:
            let valorGold = valor * 0.20
            valor -= valorGold
            ecommerce.innerHTML = `O valor total final é de ${valor} e o frete é de ${frete}`
            break

        case 3:
            let valorSilver = valor * 0.10
            valor -= valorSilver
            ecommerce.innerHTML = `O valor total final é de ${valor} e o frete é de ${frete}`
            break

        case 4:
            ecommerce.innerHTML = `O valor total é de ${valor} e o frete é e ${frete}, pois você não é assinante, portanto não tem direito a benfícios!`
            break

        default:
            ecommerce.innerHTML = `RESPOSTA INVÁLIDA!`
    }
}

function att6() {
    let peteca = document.getElementById(`peteca`)

    let cont = Number(3)
    let pont1 = Number(prompt("Qual a pontuação do 1° arremesso? "))
    let pont2 = Number(prompt("Qual a pontuação do 2° arremesso? "))
    let pont3 = Number(prompt("Qual a pontuação do 3° arremesso? "))
    let soma = pont1 + pont2 + pont3

    switch (soma) {

        case 15:
            peteca.innerHTML = `Sua pontuação foi de ${soma}, você pode ser considerado um deus da peteca!`
            break

        case 14:
        case 13:
        case 12:
        case 11:
        case 10:
            peteca.innerHTML = `Sua pontuação foi de ${soma}, você é um petequeiro profissional!`
            break

        case 9:
        case 8:
        case 7:
        case 6:
        case 5:
            peteca.innerHTML = `Sua pontuação foi de ${soma}, huummm petequeiro de final de semana`
            break

        case 4:
        case 3:
        case 2:
        case 1:
            peteca.innerHTML = `Sua pontuação foi de ${soma}, quase um jogador de peteca!`
            break

        case 0:
            peteca.innerHTML = `Sua pontuação foi de ${soma}, mas você não acertou nada, piá?`
            break

        default:
            peteca.innerHTML = `PONTUAÇÃO INVÁLIDA!`

    }

}