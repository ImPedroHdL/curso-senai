let change = document.querySelector('user_name')

function mudar() {
    let foco = document.querySelector("#txt1")
    let texto2 = document.querySelector("#txt2")
    texto2.textContent = `A informação digitada foi: ${texto2.value}`
    foco.textContent = "Você saiu da caixa de digitação"

}

function mouseOver() {
    let over = document.querySelector("#mouseInOut")
    over.textContent = "Você colocou o mouse sobre a imagem!"
}

function mouseOut() {
    let mouseEmCima = document.querySelector("#mouseInOut")
    mouseEmCima.textContent = "Você tirou o mouse da imagem!"
}

let contador = 0
function buttonClick() {
    let cont = document.querySelector('.contador')
    contador++
    cont.textContent = `${contador}`
}

