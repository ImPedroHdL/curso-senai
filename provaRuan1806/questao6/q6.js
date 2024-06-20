function somar(evento) {
    evento?.preventDefault()
    const formulario = document.querySelector('form')
    const dadosFormulario = new FormData(formulario)

    let num1 = dadosFormulario.get("primeiro-numero")
    let num2 = dadosFormulario.get("segundo-numero")
    num1 = Number(num1)
    num2 = Number(num2)
    let soma = num1 + num2

    const txt = document.querySelector("#soma")

    txt.textContent = `A soma dos valores é de ${soma}`
}