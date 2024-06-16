// pagina teste de armazenar dados de usuarios par login
// arrays para armazenar os dados dos usuários
let usersFirstNames = []
let usersLastNames = []
let usersEmails = []
let usersNickNames = []
let usersPasswords = []

function registerPage(evento) {
    evento.preventDefault()

    const formulario = document.querySelector(`#dados-de-registro`)
    const dadosFormulario = new FormData(formulario)

    // pega o nome do usuário e salva em uma array
    const userFirstName = dadosFormulario.get("nome-registro-usuario")
    usersFirstNames.push(userFirstName)

    // pega o sobrenome e salva em uma array
    const userLastName = dadosFormulario.get("sobrenome-registro-usuario")
    usersLastNames.push(userLastName)

    // pega o email e verifica se já existe no sistema
    const userEmail = dadosFormulario.get("email-registro-usuario")
    if (usersEmails.indexOf(userEmail) != -1) {
        alert("Esse email já está sendo usado por outro usuário!")
        // return interrompe a função para não adição de valores desnecessários aos arrays
        return
    }

    // pega o apelido e verifica se já existe no sistema
    const userNickName = dadosFormulario.get("apelido-usuario")
    if (usersNickNames.indexOf(userNickName) != -1) {
        alert("O apelido já está sendo usado por outro usuário!")
        // return interrompe a função para não adição de valores desnecessários aos arrays
        return
    }

    // recebe e verifica se as senhas coincidem
    const userPassword = dadosFormulario.get("senha-usuario")
    const checkPassword = dadosFormulario.get("verifica-senha")
    if (userPassword != checkPassword) {
        alert("As duas senhas devem ser iguais!")
        // return interrompe a função para não adição de valores desnecessários aos arrays
        return
    }
    usersEmails.push(userEmail)
    usersNickNames.push(userNickName)
    usersPasswords.push(userPassword)

    console.log(usersFirstNames)
    console.log(usersLastNames)
    console.log(usersEmails)
    console.log(usersNickNames)
    console.log(usersPasswords)

    // limpa o formulário após o registro bem-sucedido
    formulario.reset();
}
