let nomes = []
// variavel de contagem de nomes de pessoas
let contagem = 1
function nome(evento) {
    evento?.preventDefault()

    // busca valores do input dos nomes e do paragrafo
    let user = document.querySelector('#user-name').value
    let lista = document.querySelector('#vips')


    // salva nomes no array e manda para o local storage
    nomes.push(user)
    localStorage.setItem('nomes-usuarios', JSON.stringify(nomes))

    // esvazia conteudo da div para não repetir os nomes
    lista.innerHTML = ""

    //
    for (i = 0; i < nomes.length; i++) {
        lista.innerHTML += `${contagem}- ${nomes[i]}<br>`
        contagem++
    }
}

// mostrar elementos que já existem ao recarregar página
// 1- buscar os nomes no localStorage
const nomesLocalStorage = localStorage.getItem('nomes-usuarios')
console.log(JSON.parse(nomesLocalStorage))

if (nomesLocalStorage) {
    // 2- alimentar a lista de nomes com valores que já existem no localStorage
    nomes = JSON.parse(nomesLocalStorage)
    let lista = document.querySelector('#vips')
    lista.innerHTML = ""
    for (i = 0; i < nomes.length; i++) {
        lista.innerHTML += `${contagem}- ${nomes[i]}<br>`
        contagem++
    }
}