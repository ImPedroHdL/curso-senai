function mostrarCadastro() {
    const cadastro = document.querySelector('.cadastro')

    cadastro.classList.toggle('oculto')
}

let indicesFilmes = 0
let filmes = []
let urlsFotosCadastradas = []
let personagensCadastrados = []
let atoresCadastrados = []
let filmesCadastrados = []
let descricoesCadastradas = []
let motivosCadastrados = []

let divFilmesPai = document.querySelector('#filmes')

// Função para carregar os dados do localStorage, chamada ao carregar a página
window.onload = function () {
    // Carregar dados do localStorage se existirem
    if (localStorage.getItem('fotos')) {
        urlsFotosCadastradas = JSON.parse(localStorage.getItem('fotos'))
        personagensCadastrados = JSON.parse(localStorage.getItem('Personagens'))
        filmesCadastrados = JSON.parse(localStorage.getItem('filmes'))
        atoresCadastrados = JSON.parse(localStorage.getItem('atores'))
        descricoesCadastradas = JSON.parse(localStorage.getItem('descricoes'))
        motivosCadastrados = JSON.parse(localStorage.getItem('motivos'))

        // Reconstruir as divs na página
        for (let i = 0; i < filmesCadastrados.length; i++) {
            // Criar a div para adicionar as informações
            let div = document.createElement('div')
            div.className = 'filmes-css'

            // Criar a imagem
            let imagem = document.createElement('img')
            imagem.src = urlsFotosCadastradas[i] // Usar a URL da foto correta
            imagem.alt = 'Foto do vilão'

            // Adicionar imagem à div
            div.appendChild(imagem);

            // Criar parágrafos com as informações do vilão
            let paragrafoNomePersonagem = document.createElement('p')
            paragrafoNomePersonagem.textContent = `Personagem: ${personagensCadastrados[i]}`

            let paragrafoNomeFilme = document.createElement('p')
            paragrafoNomeFilme.textContent = `Filme: ${filmesCadastrados[i]}`

            let paragrafoNomeAtor = document.createElement('p')
            paragrafoNomeAtor.textContent = `Ator: ${atoresCadastrados[i]}`

            let paragrafoDesc = document.createElement('p')
            paragrafoDesc.textContent = `Descrição: ${descricoesCadastradas[i]}`

            let paragrafoMotivo = document.createElement('p')
            paragrafoMotivo.textContent = `Motivo do antagonismo: ${motivosCadastrados[i]}`

            // Criar botão para remover o vilão
            let botaoRemover = document.createElement('button')
            botaoRemover.className = 'botoes-div-filme'
            botaoRemover.textContent = 'REMOVER'

            // Usar uma função anônima para capturar corretamente o valor de 'i' neste contexto
            botaoRemover.addEventListener('click', function () {
                // Remover o vilão da lista
                urlsFotosCadastradas.splice(i, 1)
                personagensCadastrados.splice(i, 1)
                filmesCadastrados.splice(i, 1)
                atoresCadastrados.splice(i, 1)
                descricoesCadastradas.splice(i, 1)
                motivosCadastrados.splice(i, 1)

                // Atualizar local storage após remoção
                localStorage.setItem('fotos', JSON.stringify(urlsFotosCadastradas))
                localStorage.setItem('Personagens', JSON.stringify(personagensCadastrados))
                localStorage.setItem('filmes', JSON.stringify(filmesCadastrados))
                localStorage.setItem('atores', JSON.stringify(atoresCadastrados))
                localStorage.setItem('descricoes', JSON.stringify(descricoesCadastradas))
                localStorage.setItem('motivos', JSON.stringify(motivosCadastrados))

                // Remover a div correspondente da página
                div.remove()
            })

            // Adicionar os parágrafos e o botão à div
            div.appendChild(paragrafoNomePersonagem)
            div.appendChild(paragrafoNomeFilme)
            div.appendChild(paragrafoNomeAtor)
            div.appendChild(paragrafoDesc)
            div.appendChild(paragrafoMotivo)
            div.appendChild(botaoRemover)

            // Adicionar a div do filme ao elemento pai
            divFilmesPai.appendChild(div)
        }
    }
}

function cadastrarVilao(evento) {
    evento?.preventDefault(); // Prevenir o comportamento padrão do formulário se o evento existir

    const formulario = document.querySelector('form')
    const dadosFormulario = new FormData(formulario)

    const urlFoto = dadosFormulario.get('foto')
    const nomePersonagem = dadosFormulario.get('nome-personagem')
    const nomeFilme = dadosFormulario.get('nome-filme')
    const nomeAtor = dadosFormulario.get('nome-ator')
    const desc = dadosFormulario.get('descricao')
    const motivoAntagonismo = dadosFormulario.get('motivo-antagonismo')

    // Adicionar os dados aos arrays respectivos
    urlsFotosCadastradas.push(urlFoto)
    personagensCadastrados.push(nomePersonagem)
    filmesCadastrados.push(nomeFilme)
    atoresCadastrados.push(nomeAtor)
    descricoesCadastradas.push(desc)
    motivosCadastrados.push(motivoAntagonismo)

    // Atualizar o local storage após transformar os arrays em strings JSON
    localStorage.setItem('fotos', JSON.stringify(urlsFotosCadastradas))
    localStorage.setItem('Personagens', JSON.stringify(personagensCadastrados))
    localStorage.setItem('filmes', JSON.stringify(filmesCadastrados))
    localStorage.setItem('atores', JSON.stringify(atoresCadastrados))
    localStorage.setItem('descricoes', JSON.stringify(descricoesCadastradas))
    localStorage.setItem('motivos', JSON.stringify(motivosCadastrados))

    // Limpar a área de exibição dos filmes antes de adicionar novamente
    divFilmesPai.textContent = ""

    // Iterar sobre os filmes cadastrados para exibir na página
    for (let i = 0; i < filmesCadastrados.length; i++) {
        // Criar a div para adicionar as informações
        let div = document.createElement('div')
        div.className = 'filmes-css'

        // Criar a imagem
        let imagem = document.createElement('img')
        imagem.src = urlsFotosCadastradas[i] // Usar a URL da foto correta
        imagem.alt = 'Foto do vilão'

        // Adicionar imagem à div
        div.appendChild(imagem)

        // Criar parágrafos com as informações do vilão
        let paragrafoNomePersonagem = document.createElement('p')
        paragrafoNomePersonagem.textContent = `Personagem: ${personagensCadastrados[i]}`

        let paragrafoNomeFilme = document.createElement('p')
        paragrafoNomeFilme.textContent = `Filme: ${filmesCadastrados[i]}`

        let paragrafoNomeAtor = document.createElement('p')
        paragrafoNomeAtor.textContent = `Ator: ${atoresCadastrados[i]}`

        let paragrafoDesc = document.createElement('p')
        paragrafoDesc.textContent = `Descrição: ${descricoesCadastradas[i]}`

        let paragrafoMotivo = document.createElement('p')
        paragrafoMotivo.textContent = `Motivo do antagonismo: ${motivosCadastrados[i]}`

        // Criar botão para remover o vilão
        let botaoRemover = document.createElement('button')
        botaoRemover.id = 'botoes-div-filme'
        botaoRemover.textContent = 'REMOVER'

        // Usar uma função anônima para capturar corretamente o valor de 'i' neste contexto
        botaoRemover.addEventListener('click', function () {
            // Remover o vilão da lista
            urlsFotosCadastradas.splice(i, 1)
            personagensCadastrados.splice(i, 1)
            filmesCadastrados.splice(i, 1)
            atoresCadastrados.splice(i, 1)
            descricoesCadastradas.splice(i, 1)
            motivosCadastrados.splice(i, 1)

            // Atualizar local storage após remoção
            localStorage.setItem('fotos', JSON.stringify(urlsFotosCadastradas))
            localStorage.setItem('Personagens', JSON.stringify(personagensCadastrados))
            localStorage.setItem('filmes', JSON.stringify(filmesCadastrados))
            localStorage.setItem('atores', JSON.stringify(atoresCadastrados))
            localStorage.setItem('descricoes', JSON.stringify(descricoesCadastradas))
            localStorage.setItem('motivos', JSON.stringify(motivosCadastrados))

            // Remover a div correspondente da página
            div.remove()
        })

        // Adicionar os parágrafos e o botão à div
        div.appendChild(paragrafoNomePersonagem)
        div.appendChild(paragrafoNomeFilme)
        div.appendChild(paragrafoNomeAtor)
        div.appendChild(paragrafoDesc)
        div.appendChild(paragrafoMotivo)
        div.appendChild(botaoRemover)

        // Adicionar a div do filme ao elemento pai
        divFilmesPai.appendChild(div)
    }
    formulario.reset()
}