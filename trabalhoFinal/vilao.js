function mostrarCadastro() {
    const cadastro = document.querySelector('.cadastro')

    cadastro.classList.toggle('oculto')
}


function cadastrarVilao(evento) {
    evento?.preventDefault()

    const formulario = document.querySelector('form')
    const dadosFormulario = new FormData(formulario)

    const urlFoto = dadosFormulario.get('foto')
    const nomePersonagem = dadosFormulario.get('nome-personagem')
    const nomeFilme = dadosFormulario.get('nome-filme')
    const nomeAtor = dadosFormulario.get('nome-ator')
    const desc = dadosFormulario.get('descricao')
    const motivoAntagonismo = dadosFormularios.get('motivo-antagonismo')

    
}