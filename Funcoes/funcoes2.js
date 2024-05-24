// função anonima -- deve ser armazenada dentro de uma variável
// na pratica é igual uma função nomeada
const somar = function (num1, num2) {
    return num1 + num2
    // pq todos exemplos são de soma??
}
let resultado = somar(5, 7)
console.log(resultado)

// arrow function
// na pratica é igual a uma função anonima
// deve ser jogada dentro de uma variavel
// se existem mais que 1 parametro ou não haja, obrigatório o uso de parenteses
const flecha = (num1, num2) => {
    return num1 + num2
    // se remover chaves, remover o "return" também
}
let resultado2 = flecha(1, 5)
console.log(resultado2)

const bemVindo = nome => `Seja bem vindo ${nome}`
let retornoBemVindo = bemVindo("Pedro")
console.log(retornoBemVindo)


// função callback
// na pratica dificilmente usada
function processAposReceberNome(meDeUmaFuncao) {
    let nome = prompt("Qual o seu nome?")
    meDeUmaFuncao(nome)
}
processAposReceberNome(function (nomeRecebido) {
    console.log(`Feliz aniversário ${nomeRecebido}`)
})
processAposReceberNome(function (nomeRecebido) {
    console.log(`Feliz Natal ${nomeRecebido}`)
})
processAposReceberNome(function (nomeRecebido) {
    console.log(`Feliz Ano Novo ${nomeRecebido}`)
})
processAposReceberNome(function (nomeRecebido) {
    console.log(`Feliz qualquer coisa ${nomeRecebido}`)
})

let lista = [1, 2, 3, 4, 5, 6, 7, 8]
let listaPares = lista.filter(itemRodando => {
    console.log(`Estou verificando o ${itemRodando}`)
    return itemRodando % 2 == 0
})

console.log(listaPares)

