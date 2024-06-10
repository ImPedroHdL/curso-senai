function enviarFormulario(evento) {
    evento.preventDefault()
    // importar form do html
    const formulario = document.querySelector('form')

    // cria variavel com valores do formulario
    const dadosFormulario = new FormData(formulario)

    //buscar valores do formulario pelo name
    const valorNome = dadosFormulario.get('nome_usuario')
    const valorEmail = dadosFormulario.get('email_usuario')
    const valorMensagem = dadosFormulario.get('mensagemUsuario')

    alert(`Os valores foram: \nNome: ${valorNome}\nE-mail: ${valorEmail}\nMensagem: ${valorMensagem}`)
}   