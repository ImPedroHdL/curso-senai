//Criar um programa que calcula o idh de um pais de acordo com certos aspectos

function idh() {

    let idh1 = document.getElementById(`idh1`)
    let pais = prompt("Informe o nome de algum país! ")
    let renda = Number(prompt("Informe a renda média desse país: "))
    let educacao = Number(prompt("Informe a nota média da educação desse país: "))
    let saude = Number(prompt("Informe a nota a saúde desse país: "))
    let ideaga = ((renda + educacao + saude) / 3) * 0.1

    switch (true) {
        case ideaga >= 0 && ideaga > 0.555:
            idh1.innerHTML = `O IDH de ${pais} é ${ideaga.toFixed(2)}, por isso é classificado como BAIXO!`
            break

        case ideaga <= 0.556 && ideaga <= 0.699:
            idh1.innerHTML = `O IDH de ${pais} é ${ideaga.toFixed(2)}, por isso é classificado como MÉDIO!`
            break

        case ideaga >= 0.7 && ideaga <= 0.799:
            idh1.innerHTML = `O IDH de ${pais} é ${ideaga.toFixed(2)}, por isso é classificado como ALTO!` 
            break

        case ideaga >= 0.9:
            idh1.innerHTML = `O IDH de ${pais} é ${ideaga.toFixed(2)}, por isso é classificado como MUITO ALTO!` 
            break

        default:
            idh1.innerHTML = `RESPOSTA INVÁLIDA!`
    }


}