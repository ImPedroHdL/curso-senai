function mostrarCadastro() {
    const cadastro = document.querySelector('.cadastro')

    cadastro.classList.toggle('oculto')
}

let urlsFotosCadastradas = []
let personagensCadastrados = []
let atoresCadastrados = []
let filmesCadastrados = []
let descricoesCadastradas = []
let motivosCadastrados = []

let divFilmesPai = document.querySelector('#filmes')

function cadastrarVilao(evento) {
    evento?.preventDefault()

    const formulario = document.querySelector('form')
    const dadosFormulario = new FormData(formulario)

    const urlFoto = dadosFormulario.get('foto')
    urlsFotosCadastradas.push(urlFoto)

    const nomePersonagem = dadosFormulario.get('nome-personagem')
    personagensCadastrados.push(nomePersonagem)

    const nomeFilme = dadosFormulario.get('nome-filme')
    filmesCadastrados.push(nomeFilme)

    const nomeAtor = dadosFormulario.get('nome-ator')
    atoresCadastrados.push(nomeAtor)

    const desc = dadosFormulario.get('descricao')
    descricoesCadastradas.push(desc)

    const motivoAntagonismo = dadosFormulario.get('motivo-antagonismo')
    motivosCadastrados.push(motivoAntagonismo)

    for (i = 0; i < filmesCadastrados.length; i++) {

        // criar a div para adicionar as informações
        let div = document.createElement('div')

        // classe para a div criada
        div.className = 'filmes-css'

        // criar a imagem
        let imagem = document.createElement('img')
        imagem.src = (urlFoto)
        imagem.alt = 'Foto do ator'

        // mandar imagem para a div
        div.appendChild(imagem)

        // Criar parágrafos de descrição
        var paragrafoNomePersonagem = document.createElement('p')
        paragrafoNomePersonagem.textContent = `Personagem: ${personagensCadastrados[i]}`

        var paragrafoNomeFilme = document.createElement('p')
        paragrafoNomeFilme.textContent = `Filme: ${filmesCadastrados[i]}`

        var paragrafoNomeAtor = document.createElement('p')
        paragrafoNomeAtor.textContent = `Ator: ${atoresCadastrados[i]}`

        var paragrafoDesc = document.createElement('p');
        paragrafoDesc.textContent = `Descrição: ${descricoesCadastradas[i]}`

        var paragrafoMotivo = document.createElement('p');
        paragrafoMotivo.textContent = `Motivo dele ser antagonista: ${motivosCadastrados[i]}`

        // Adicionar os parágrafos à div
        div.appendChild(paragrafoNomePersonagem)
        div.appendChild(paragrafoNomeFilme)
        div.appendChild(paragrafoNomeAtor)
        div.appendChild(paragrafoDesc)
        div.appendChild(paragrafoMotivo)

        // adiciona div do filme a div pai
        divFilmesPai.appendChild(div)
    }
    formulario.reset()
}