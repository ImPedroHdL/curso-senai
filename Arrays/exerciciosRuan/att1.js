function att1() {
    let notas = []
    let media, tamanho, soma = 0, nota
    let maior = 0, menor = 11

    for (i = 0; i < 6; i++) {
        nota = Number(prompt("Digita a nota: ")) //Pegar notas e somatório total
        //Adicionar a nota ao Array 
        notas.push(nota)
        soma += nota // Somatório total para média
        //Verifica se a nota é a maior
        if (nota > maior) {
            maior = nota
        }
        //Verifica se a nota é a menor
        if (nota < menor) {
            menor = nota
        }

        tamanho = notas.length // Para divisão da média
    }
    notas.sort

    console.log(notas)
    let somaTotal = soma - maior - menor
    media = somaTotal / tamanho
    console.log(`As notas digitadas foram: ${notas.join(", ")}, retirando a menor que foi ${menor} e a maior que foi ${maior}, a média ficou: ${media.toFixed(2)}`)
}

function att12() {
    let soma = 0
    let notas = []

    for (i = 0; i < 6; i++) {
        notas[i] = Number(prompt("Digite a nota: "))
    }
    console.log(notas)
    //Ordenar notas
    notas.sort((atual, proximo) => atual - proximo)
    console.log(notas)
    //Remover do final
    notas.pop()
    console.log(notas)
    //Remover do inicio
    notas.shift()
    console.log(notas)

    soma = notas[0] + notas[1] + notas[2]
}

function att2() {
    let impar = []
    let soma = 0
    for (let i = 0; i < 5; i++) {
        let numero = Number(prompt("Digite um número inteiro: "))
        // Verifica se é impar
        if (numero % 2 != 0) {
            //adc o numero no array de impares e na soma
            impar.push(numero)
            soma += numero
        }
    }
    console.log(`A soma dos valores impares são ${soma} e os valores impares são ${impar.join(", ")}`)
}


function att3() {
    let nomes = []
    let escolha, nome

    while (nomes.length < 5) {

        escolha = Number(prompt("Digite 1 para entrar ou 2 para sair!"))

        switch (escolha) {

            case 1:
                nome = prompt("Digite seu nome: ")
                nomes.push(nome)
                break

            case 2:
                nomes.shift()
                break

            default:
                alert("Resposta inválida!")
        }

    }
    console.log(`Pessoas na fila: ${nomes.join(", ")}`)

}