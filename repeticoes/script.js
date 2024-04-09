
// let resultado = document.getElementById('divSaida')
// console.log(resultado)

//let nome = prompt("Qual seu nome? ")

//resultado.innerHTML = `ola usuario`


// let cont = 0
// while(cont < 10){

//     resultado.innerHTML+=(`${cont} patinhos foram passear<br>`)
//     cont++
// }


let numeroQuadrado = document.getElementById('numeroQuadrado')

let numero = 10//Number(prompt("Digite um valor "))
let cont = 0
while(cont < numero){
    cont++
    let quad = cont**2
    numeroQuadrado.innerHTML +=`${quad}<br>`
}
