function mudarTextoECor() {
    // importa o elemento do html para o js
    const div1 = document.querySelector('#exemplo1')
    // mudar a cor do background ao clicar no botao
    exemplo1.style.backgroundColor = "purple"
    //mudar cor das letras
    exemplo1.style.color = "orange"
    //mudar tamanho da fonte
    exemplo1.style.fontSize = "30px"
    //mudar fonte do texto
    exemplo1.style.fontFamily = "Arial, sans-serif, franklin-gothic"
    // mudar alinhamento texto
    exemplo1.style.textAlign = "center"
    //sublinhado
    exemplo1.style.textDecoration = "underline"
}

function mudarQuadrados() {
    // importar elementos do html
    const quadrado1 = document.querySelector('#quadrado1')
    const quadrado2 = document.querySelector('#quadrado2')

    //mudar altura dos elementos
    quadrado1.style.height = "100px"
    quadrado2.style.height = "100px"

    //alterar largura dos elementos
    quadrado1.style.width = "100px"
    quadrado2.style.width = "100px"

    //mudar cor dos quadrados
    quadrado1.style.backgroundColor = "red"
    quadrado2.style.backgroundColor = "blue"

    //mudar a margem dos elementos
    quadrado1.style.margin = "20px"
    quadrado2.style.margin = "20px"

    //mudar o padding dos elementos
    quadrado1.style.padding = "30px"
    quadrado2.style.padding = "30px"

    //mudar a borda dos elementos
    quadrado1.style.border = "10px solid black"
    quadrado2.style.border = "10px solid black"
}

function esconderTexto() {
    const texto = document.querySelector('#textoEscondido')

    // texto.style.display = "block"
    // fazer o elemento voltar a aparecer
    if (texto.style.display == "none") {
        texto.style.display = "block"
    } else {
        texto.style.display = "none"
    }
}

function ativarDisplayFlex() {
    // importar body para manipular

    const body = document.querySelector('body')

    // ativar display flex
    body.style.display = "flex"
    // deixar elemento na direcao de coluna
    body.style.flexDirection = "column"
    //centralizar no eixo tranversal da coluna
    body.style.alignItems = "center"
    //alinhar no eixo principal (coluna)
    body.style.justifyContent = "center"
}

function subirImagem() {
    //importar imagem
    const img = document.querySelector('img')
    // deixar a posição fixa
    img.style.position = "fixed"
    // definir em qual local a imagem vai ficar
    img.style.top = "20px"
    img.style.right = "20px "
}