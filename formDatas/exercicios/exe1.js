function avaliar(evento) {
    evento.preventDefault() // remover atualização da pagina ao enviar formulario

    const form = document.querySelector('form') // importa formulario para receber valores
    const inputs = new FormData(form) // variavel recebe valores como formulario

    // importar elementos do formulario
    const nome = inputs.get("user_name")
    const peso = inputs.get("peso_usuario")
    const altura = inputs.get("altura_usuario")
    const profissao = inputs.get("profissao_usuario")
    const urlFoto = inputs.get("user_pic")
    const foto = document.querySelector('img')
    foto.setAttribute("src", urlFoto)
    foto.style.display = "block"

    let resultado

    // retorna valores ao html
    const resultadoNome = document.querySelector('#txtNome')
    const resultadoPeso = document.querySelector('#txtPeso')
    const resultadoAltura = document.querySelector('#txtAltura')
    const resultadoProfissao = document.querySelector('#txtProfissao')
    const resultIMC = document.querySelector('#imcText')

    //realizar calculo do imc
    let resultadoIMC = peso / (altura * altura)
    resultadoIMC = resultadoIMC.toFixed(2)
    console.log(resultadoIMC)

    switch (true) {

        case (resultadoIMC < 18.5):
            resultado = `O seu IMC é ${resultadoIMC}, que é considerado "Magreza"`
            break

        case (resultadoIMC > 18.5 && resultadoIMC < 24.99):
            resultado = `O seu IMC é ${resultadoIMC}, que é considerado "Normal"`
            break

        case (resultadoIMC > 25 && resultadoIMC < 29.99):
            resultado = `O seu IMC é ${resultadoIMC}, que é considerado "Sobrepeso"`
            break

        case (resultadoIMC > 30 && resultadoIMC < 39.99):
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
    resultIMC.textContent = (resultado)
}