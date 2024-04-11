function calcMedia() {
    let mediaNota = document.getElementById(`mediaNota`)
    let nota = Number(0)
    let media = Number(0)
    let totalNotas = Number(0)
    let soma = Number(0)

    while (nota != -1) {
        nota = Number(prompt("Digite a sua nota: "))
        if (nota != -1) {
            soma += nota
            totalNotas ++
        } else{
            mediaNota.innerHTML = `CALCULO FINALIZADO`
        }
    }
    media = soma / totalNotas

    mediaNota.innerHTML = (`A média das notas é de ${media}!`)
}