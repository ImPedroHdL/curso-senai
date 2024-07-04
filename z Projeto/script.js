// Array que armazena os filmes cadastrados
let arrayDeFilmes = [];
// variavel para reiniciar o form do cadastro
let reiniciarForm = document.querySelector('#inputs-cadastro')

//se filmes estiver no Local Storage ele vai transformar em um array
// logo depois vai renderizar os filmes na tela
if (localStorage.getItem("filmes")) {
  arrayDeFilmes = JSON.parse(localStorage.getItem("filmes"));
  renderizarFilmes();
}
// Função para mostrar ou ocultar o formulário de cadastro de filme
function mostrarCadastro() {
  const cadastro = document.querySelector(".cadastro");
  cadastro.classList.toggle("oculto"); // Alterna a classe "oculto" para mostrar ou ocultar o formulário
}

// Função para cadastrar um novo filme
function cadastrarFilme(event) {
  event.preventDefault();

  const imagem = document.querySelector("#id_imagem").value;
  const titulo = document.querySelector("#id_titulo").value;
  const autor = document.querySelector("#id_autor").value;
  const data = document.querySelector("#id_data").value;
  const descricao = document.querySelector("#id_descricao").value;
  const duracao = document.querySelector("#id_duracao").value;
  const sinopse = document.querySelector("#id_sinopse").value;

  let arrayDoFilme = []; // Limpa o array antes de adicionar novos valores
  arrayDoFilme.push(imagem, titulo, autor, data, descricao, duracao, sinopse);
  arrayDeFilmes.push(arrayDoFilme);

  renderizarFilmes();
  const formulario = document.querySelector('form')
    const dadosFormulario = new FormData(formulario)
    formulario.reset()
}

// Função para renderizar os filmes na página
function renderizarFilmes() {
  let saida = document.querySelector("#baseDeFilmes");
  saida.innerHTML = ``; // Limpa o conteúdo atual para renderizar novamente

  // Itera sobre o array de filmes e cria o HTML para cada filme
  arrayDeFilmes.forEach((filme, index) => {
    let [imagem, titulo, autor, data, descricao, duracao, sinopse] = filme;

    // Cria o HTML para exibir o filme na página
    let filmeHTML = `<div class="filme" id="filme${index}">
                      <img src="${imagem}">
                      <h5>Título</h5>
                      <h6>${titulo}</h6>
                      <h5>Autor</h5>
                      <h6>${autor}</h6>
                      <h5>Data de lançamento</h5>
                      <h6>${data}</h6>
                      <h5>Descrição</h5>
                      <h6>${descricao}</h6>
                      <h5>Duração</h5>
                      <h6>${duracao}</h6>
                      <h5>Sinopse</h5>
                      <h6>${sinopse}</h6>
                      <a class="AdoBotao" href="https://www.youtube.com/watch?v=kqKDnZtOFYk">
                        <button class="botaoAssistir">Assistir</button>
                      </a>
                      <button class="botaoDeletar" onclick="funcaoDeletar(${index})">Deletar</button>
                    </div>`;

    saida.innerHTML += filmeHTML; // Adiciona o filme à saída na página
    localStorage.setItem("filmes", JSON.stringify(arrayDeFilmes));
  });
}

// Função para deletar um filme pelo índice
function funcaoDeletar(index) {
  arrayDeFilmes.splice(index, 1); // Remove o filme do array pelo índice
  localStorage.setItem("filmes", JSON.stringify(arrayDeFilmes));
  renderizarFilmes(); // Renderiza novamente a lista de filmes após a exclusão
}
