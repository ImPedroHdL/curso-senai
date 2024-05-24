function att1() {
    // mostrar mensagem de acordo com idade informada

    let idade = prompt("Digite a idade do colaborador: ")

    if (idade <= 17) {
        alert("O colaborador ainda é menor de idade")
    } else if (idade < 60) {
        alert("O colaborador já é adulto!")
    } else if (idade >= 60) {
        alert("O colaborador já é idoso!")
    }
}

function att2() {
    // verificador de estação do ano com base no numero do mês
    let mes = Number(prompt("Informe o número do mês desejado:"))

    switch (mes) {
        case 12:
        case 1:
        case 2:
            alert("Estação do Verão!")
            break

        case 3:
        case 4:
        case 5:
            alert("Estação do Outono!")
            break

        case 6:
        case 7:
        case 8:
            alert("Estação de Inverno!")
            break

        case 9:
        case 10:
        case 11:
            alert("Estação de primavera!")
            break

        default:
            alert("Respota inválida!")
    }
}

function att3() {
    // contador de alertas criticos de um sensor

    let alertas = [1, 3, 7, 8, 3, 5, 3, 0]
    let contador = 0

    // // apenas para gerar valores aleatórios ao Array
    // for (i = 0; i < 10; i++) {
    //     alertas[i] = Math.floor(Math.random() * 100)
    //     alertas.sort()
    // }

    // verifica se há algum numero 3 em algum indice
    for (i = 0; i < alertas.length; i++)
        if (alertas[i] == 3) {
            contador++ // incrementa o contador da quantidade de alertas cod 3
        }
    console.log(alertas)
    console.log(`O código de alerta "3" apareceu ${contador} vezes`)
    console.log("\n")
    alert(`O número de alerta "3" apareceu ${contador} vezes`)
}

function att4() {
    // manipulador de tarefas

    let tarefas = []
    let choice

    while (choice != "f") {
        choice = prompt("Digite a opção desejada: \na) Adicionar tarefa comum\nb) Adicionar tarefa prioritária\nc) Remover a primeira tarefa\nd) Remover a última tarefa \ne) Listar tarefas \nf) Sair")
        choice = choice.toLowerCase()
        switch (choice) {
            case "a":
                let tarefaComum = prompt("Qual a tarefa comum deseja adicionar? ")
                tarefas.push(tarefaComum)
                break

            case "b":
                let tarefaPrioritaria = prompt("Qual a tarefa prioritaria deseja adicionar? ")
                tarefas.unshift(tarefaPrioritaria)
                break

            case "c":
                tarefas.shift()
                break

            case "d":
                tarefas.pop()
                break

            case "e":
                if (tarefas.length == 0) {
                    alert("A lista de tarefas está vazia!")
                } else {
                    alert(`${tarefas.join(", ")} \n`)
                }
                break

            case "f":
                console.log("Você saiu")
                break

            default:
                alert("Resposta inválida!")
        }
    }
}

function att5() {
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
    alert(`Pessoas na fila: ${nomes.join(", ")}`)
    console.log(`Pessoas na fila: ${nomes.join(", ")}`)
}

