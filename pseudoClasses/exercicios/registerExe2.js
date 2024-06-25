
// teste com local storage
// verifica se já existem dados no armazenados e, se não existirem, inicializa arrays vazios
let usersFirstNames = JSON.parse(localStorage.getItem('usersFirstNames')) || []
let usersLastNames = JSON.parse(localStorage.getItem('usersLastNames')) || []
let usersEmails = JSON.parse(localStorage.getItem('usersEmails')) || []
let usersNickNames = JSON.parse(localStorage.getItem('usersNickNames')) || []
let usersPasswords = JSON.parse(localStorage.getItem('usersPasswords')) || []

function registerPage(evento) {
    evento.preventDefault()

    const formulario = document.querySelector('#dados-de-registro')
    const dadosFormulario = new FormData(formulario)

    // pega o email e verifica se já existe no sistema
    const userEmail = dadosFormulario.get('email-registro-usuario')
    if (usersEmails.indexOf(userEmail) != -1) {
        alert('Esse email já está sendo usado por outro usuário!')
        return
    }

    // pega o apelido e verifica se já existe no sistema
    const userNickName = dadosFormulario.get('apelido-usuario')
    if (usersNickNames.indexOf(userNickName) != -1) {
        alert('O apelido já está sendo usado por outro usuário!')
        return
    }

    // recebe e verifica se as senhas coincidem
    const userPassword = dadosFormulario.get('senha-usuario')
    const checkPassword = dadosFormulario.get('verifica-senha')
    if (userPassword != checkPassword) {
        alert('As duas senhas devem ser iguais!')
        return
    }

    // adiciona os novos dados aos arrays
    const userFirstName = dadosFormulario.get('nome-registro-usuario')
    const userLastName = dadosFormulario.get('sobrenome-registro-usuario')

    usersFirstNames.push(userFirstName)
    usersLastNames.push(userLastName)
    usersEmails.push(userEmail)
    usersNickNames.push(userNickName)
    usersPasswords.push(userPassword)

    // atualiza os dados no localStorage após o registro bem-sucedido
    localStorage.setItem('usersFirstNames', JSON.stringify(usersFirstNames))
    localStorage.setItem('usersLastNames', JSON.stringify(usersLastNames))
    localStorage.setItem('usersEmails', JSON.stringify(usersEmails))
    localStorage.setItem('usersNickNames', JSON.stringify(usersNickNames))
    localStorage.setItem('usersPasswords', JSON.stringify(usersPasswords))

    // limpa o formulário após o registro bem-sucedido
    formulario.reset()

    console.log('Registro bem-sucedido!')
    console.log('Dados atualizados no localStorage:')
    console.log(localStorage.getItem('usersFirstNames'))
    console.log(localStorage.getItem('usersLastNames'))
    console.log(localStorage.getItem('usersEmails'))
    console.log(localStorage.getItem('usersNickNames'))
    console.log(localStorage.getItem('usersPasswords'))
}