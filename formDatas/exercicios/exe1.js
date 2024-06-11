function avaliar(evento) {
    evento.preventDefault()
    const nome = document.querySelector('#user_name').value
    const peso = document.querySelector('#user_weight').value
    const altura = document.querySelector('#user_height').value
    const profissao = document.querySelector('#user_profission').value
    const fotoUsuario = document.querySelector('#user_pic').value
    const foto = document.querySelector('img')
    let resultado = document.querySelector('#imcText')

    const resultadoNome = document.querySelector('#txtNome')
    const resultadoPeso = document.querySelector('#txtPeso')
    const resultadoAltura = document.querySelector('#txtAltura')
    const resultadoProfissao = document.querySelector('#txtProfissao')




    let resultadoIMC = peso / (altura * altura)


    switch (resultadoIMC) {

        case (resultadoIMC < 18.5):
            resultado = `O seu IMC é ${resultadoIMC}, que é considerado "Magreza"`
            break

        case (resultadoIMC > 18.5 && resultadoIMC < 24.9):
            resultado = `O seu IMC é ${resultadoIMC}, que é considerado "Normal"`
            break

        case (resultadoIMC > 25 && resultadoIMC < 29.9):
            resultado = `O seu IMC é ${resultadoIMC}, que é considerado "Sobrepeso"`
            break

        case (resultadoIMC > 30 && resultadoIMC < 39.9):
            resultado = `O seu IMC é ${resultadoIMC}, que é considerado "Obesidade"`
            break

        case (resultadoIMC > 40):
            resultado = `O seu IMC é ${resultadoIMC}, que é considerado "Obesidade Grave"`
            break

        default:
            resultado = `Resultado inválido`

    }

    resultadoNome.textContent = `Nome: ${nome}`
    resultadoPeso.textContent = `Peso: ${peso}`
    resultadoAltura.textContent = `Altura: ${altura}`
    resultadoProfissao.textContent = `Profissão: ${profissao}`
    resultado.textContent = (resultado)

    foto.setAttribute = ("src", fotoUsuario)
}