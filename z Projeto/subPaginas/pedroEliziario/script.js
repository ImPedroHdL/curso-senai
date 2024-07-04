function mostrarCadastro() {
    const cadastro = document.querySelector('.cadastro')
    cadastro.classList.toggle('oculto')
}
function mostrarInformacoes() {
    const  informacoes = document.querySelector('#informacoes')
    .classList.toggle('oculto')
}
// Cadastrar filmes /////////////////////////////////////////////////////////////////////////////////
let contadorBtn = 0
let principais = []
function cadastrarPrincipal(evento) {
    evento.preventDefault()
    const foto = document.getElementById('id_url_foto').value
    const nome = document.getElementById('id_nome_personagem_principal').value
    const filme = document.getElementById('id_nome_filme').value
    const ator = document.getElementById('id_nome_ator_principal').value
    const descricao = document.getElementById('id_descricao_personagem_principal').value
    const habilidades = document.getElementById('id_Habilidades_principal').value

    const inputs = [foto, nome, filme, ator, descricao, habilidades]
    principais.push(inputs)
    localStorage.setItem('inputs', JSON.stringify(principais))

    const divPrincipais = document.getElementById('div_id_principais')
    divPrincipais.innerHTML += `
            <div class="principal" }>
                <div class="filme_principal">
                    <img src="${foto}" alt="">
                    <h5>PERSONAGEM: ${nome}</h5>
                    <h5>FILME: ${filme}</h5>
                    <h5>ATOR: ${ator}</h5>
                    <h5>DESCRIÇÃO: </h5>              <h6>${descricao}</h6>
                    <h5>HABILIDADES: </h5>            <h6>${habilidades}</h6>
                    <button onclick="excluir(${contadorBtn})">EXCLUIR</button>
                </div>
            </div>
            <br>`
            contadorBtn++
}

    let filmesArmazenados = localStorage.getItem('inputs')
    if (filmesArmazenados) {
        principais = JSON.parse(filmesArmazenados)
        for (let cont = 0; cont < principais.length; cont++) {
            const filme = principais[cont];

            const divPrincipais = document.getElementById('div_id_principais')
            divPrincipais.innerHTML += `
               <div class="principal">
                   <div class="filme_principal">
                       <img src="${filme[0]}" alt="">
                       <h5>PERSONAGEM: ${filme[1]}</h5>
                       <h5>FILME: ${filme[2]}</h5>
                       <h5>ATOR: ${filme[3]}</h5>
                       <h5>DESCRIÇÃO: </h5>              <h6>${filme[4]}</h6>
                       <h5>HABILIDADES: </h5>            <h6>${filme[5]}</h6>
                       <button onclick="excluir(${cont})">EXCLUIR</button>
                   </div>
               </div>
               <br>`
        }
    }

function excluir(indice) {
    principais.splice(indice, 1); // Remove o filme do array principais
    localStorage.setItem('inputs', JSON.stringify(principais)); // Atualiza o localStorage

    const divPrincipais = document.getElementById('div_id_principais');
    divPrincipais.innerHTML = ''; // Limpa o conteúdo atual da div

    // Adiciona os filmes restantes ao innerHTML
    for (let cont = 0; cont < principais.length; cont++) {
        const filme = principais[cont];
        divPrincipais.innerHTML += `
            <div class="principal">
                <div class="filme_principal">
                    <img src="${filme[0]}" alt="">
                    <h5>PERSONAGEM: ${filme[1]}</h5>
                    <h5>FILME: ${filme[2]}</h5>
                    <h5>ATOR: ${filme[3]}</h5>
                    <h5>DESCRIÇÃO:</h5>
                    <h6>${filme[4]}</h6>
                    <h5>HABILIDADES:</h5>
                    <h6>${filme[5]}</h6>
                    <button onclick="excluir(${cont})">EXCLUIR</button>
                </div>
            </div>
            <br>`;
    }
}
