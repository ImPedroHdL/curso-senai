function comprarItem1() {
    // importa valores do hmtl
    const div = document.querySelector('.form-compra')

    // aparece ou remove formulario de compra
    div.classList.toggle('oculto')

}

function pagamento(evento) {
    evento.preventDefault()

    const formulario = document.querySelector('form')

    const dadosFormulario = new FormData(formulario)

    const nome = dadosFormulario.get('nome')
    const cpf = dadosFormulario.get('cpf-usuario')
    const endereço = dadosFormulario.get('endereco')
    const email = dadosFormulario.get('email')
    const celular = dadosFormulario.get('cellphone')

    const check = dadosFormulario.get('check')


    console.log(check)
}