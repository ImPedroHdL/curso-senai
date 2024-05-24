function att1() {
    function calculoArea(largura, profundidade) {
        let area = largura * profundidade
        return area
    }
    let resultado = calculoArea(50, 40)
    let resultado1 = calculoArea(30, 40)
    let resultado2 = calculoArea(100, 100)
    let resultado3 = calculoArea(40, 40)
    alert(`Terreno padrão: ${resultado}m²`)
    alert(`Terreno sobrado: ${resultado1}m²`)
    alert(`Terreno mansão: ${resultado2}m²`)
    alert(`Terreno comercial: ${resultado3}m²`)
}
function att2() {
    function parImpar(num1) {
        if (num1 % 2 == 0) {
            let par = ("O valor informado é par!")
            return par
        } else {
            impar = ("O valor informado é impar!")
            return impar
        }
    }
    result = parImpar(1)
    alert(result)
}
function att3() {
    let choice = Number(prompt("1) Somar\n2) Subtrair\n3) Multiplicar\n4) Dividir"))
    let num1 = Number(prompt("Digite o primeiro valor: "))
    let num2 = Number(prompt("Digite o segundo valor: "))
    function somar(num1, num2) {
        let soma = num1 + num2
        return soma
    }
    function subtrair(num1, num2) {
        let sub = num1 - num2
        return sub
    }
    function multiplicar(num1, num2) {
        mult = num1 * num2
        return mult
    }
    function dividir(num1, num2) {
        div = num1 / num2
        return div
    }
    switch (choice) {
        case 1:
            let somados = somar(num1, num2)
            alert(`A soma de ${num1} com ${num2} é ${somados}`)
            console.log(`A soma de ${num1} com ${num2} é ${somados}`)
            break
        case 2:
            let subtraidos = subtrair(num1, num2)
            alert(`A subtração de ${num1} por ${num2} é ${subtraidos}`)
            break
        case 3:
            let multiplicados = multiplicar(num1, num2)
            alert(`A multiplicação de ${num1} por ${num2} é ${multiplicados}`)
            break
        case 4:
            let divididos = dividir(num1, num2)
            alert(`A divisão de ${num1} por ${num2} é ${divididos}`)
            break
        default:
            alert("Resposta inválida!")
    }
}
function att4() {
    function verificaPrimo(num1) {
           let primo = "O valor informado é primo"
        for (i = 2; i < num1; i++) {
            if (num1 % i == 0) {
                primo = "O valor informado nao é primo!"
                break
            }
        }
        return primo
    }
    let num1 = Number(prompt("Digite um valor para verificar se é primo!"))
    numero = verificaPrimo(num1)
    alert(numero)
}

