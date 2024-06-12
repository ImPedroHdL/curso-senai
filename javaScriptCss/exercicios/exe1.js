function corParagrafo() {
    // importar valor do paragrafo
    const div = document.querySelector('#exe1')
    const mudarTxt = document.querySelector('#paragrafoMudaCor')
    const subParagrafo = document.querySelector('#subParagrafo')

    // mudar texto do paragrafo
    mudarTxt.textContent = "Estou verde"
    // mudar cor ao clicar botão
    div.style.color = 'green'

    // estilizar div para melhor organização
    div.style.height = "fit-content"
    div.style.width = "fit-content"
    div.style.backgroundColor = "pink"

    div.style.textAlign = "center"
    subParagrafo.style.display = "block"
    subParagrafo.style.margin = "2px"
    mudarTxt.style.margin = "10px"
    

    div.style.padding = "10px"
    div.style.borderRadius = "10px"
}

function corVerde() {
    // importa valores
    const div = document.querySelector('#divMudaCor')
    //muda cor para verde quando mouse passa por cima
    div.style.backgroundColor = 'green'
}

function corAmarela() {
    // importa valores da div
    const div = document.querySelector('#divMudaCor')
    // muda cor para amarelo quando a div é clicada
    div.style.backgroundColor = 'yellow'
    div.style.color = 'black    '
}

function corAzul() {
    // importa valores
    const div = document.querySelector('#divMudaCor')
    // muda cor para azul
    div.style.backgroundColor = 'blue'
    div.style.color = 'white'
}

function mudarCor() {
    //recebe valor do input do html
    const input = document.querySelector('#inputCor').value
    const body = document.querySelector('#exe3')

    //  mudar cor do body
    body.style.backgroundColor = input

}