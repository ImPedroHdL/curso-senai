// let idades = [20, 21, 23, 17, 16, 30, 10, 12, 25, 55]

// //console.log(idades[3])

// for (i = 0; i < idades.length; i++) {
//     if (idades[i] >= 18) {
//         console.log(idades[i])
//     }
// }

function meses() {

    let nomeMeses = [, "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    let diasMes = [, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let n = Number(prompt("Digite o número do mês desejado: "))
    alert(`O mês de ${nomeMeses[n]} possui ${diasMes[n]} dias!`)
}


function exArray() {
    let diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira - Melhor dia", "Sabado", "Domingo"]

    //Exemplos de tratamento de arrays

    diasSemana[5] = "Melhor dia"
    console.log(diasSemana)

    diasSemana.push("Feriado")
    console.log('acrescentando elemento dentro da Array')
    console.log(diasSemana[7])

    console.log("\n")

    diasSemana.unshift("Semana 01")
    console.log("Acrescentando elemento no inicio com unshift")
    console.log(diasSemana)

    console.log("\n")

    diasSemana.pop()
    console.log("Removendo elemento do final com 'Pop'")
    console.log(diasSemana)

    console.log("\n")

    diasSemana.shift()
    console.log("Removendo o primeiro elemento com 'Shift'")
    console.log(diasSemana)

    console.log("\n")

    diasSemana.concat(['Natal', 'Ano novo'])
    diasSemana.push(...['Natal', 'Ano novo'])

    //

    let i = diasSemana.indexOf('Terça-feira')
    console.log(`Posição no array: ${i}`)

    i = diasSemana.indexOf('Domingo')
    console.log(`Posição de domingo no Array ${i}`)


    //splice
    //remover elementos

    i = diasSemana.indexOf('Quarta-feira')

    if (i != -1) {

        diasSemana.splice(i, 1)
    }
    //Remover um dia específico
    console.log(diasSemana)
}

function att1() {
    //criar arrays de numeros pares de 2 a 20

    let pares = []
    for (cont = 2; cont <= 20; cont++) {//adc += 2 adc = 2
        if (cont % 2 == 0) {
            pares.push(cont)
        }
    }
    console.log(pares)
    console.log("\n")
    console.log('Substituir o 3° valor por 12')
    pares[2] = 12
    console.log(pares)
}

function att2() {
    let frutas = ["Banana", " Maçã", " Uva "]
    frutas.push("Morango")
    console.log(' ' + frutas)

    //remover 2° elemento da array de frutas

    console.log("Removendo o 2° elemento da array")
    frutas.splice(1, 1)
    console.log(frutas)
}

function att3() {
    let amigos = ["Aroldo", "Otávio", "Taylor"]
    let maisAmigos = ["Vinicius", "Victor", "Johnatan"]

    console.log(amigos.concat(maisAmigos))
}
