function avaliar(evento) {
    evento.preventDefault()
    const nome = document.querySelector('#user_name').value
    const peso = document.querySelector('#user_weight').value
    const altura = document.querySelector('#user_height').value
    const profissao = document.querySelector('#user_profission').value
    const fotoUsuario = document.querySelector('#user_pic').value
    const foto = document.querySelector('img')
    const resultado = document.querySelector('#imcText')
    let resultadoIMC = peso / (altura * altura)

    resultado.textContent = `Nome: ${nome}\nPeso: ${peso}\nAltura: ${altura}\nProfissão: ${profissao}\nIMC: ${resultadoIMC.toFixed(2)}`
    foto.setAttribute("src", fotoUsuario)
}