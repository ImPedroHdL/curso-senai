const p = document.getElementById("contador")
let cont = localStorage.getItem('numeros')

function contadorLocalStorage() {

    cont++
    localStorage.setItem('numeros', (cont))
    p.textContent = cont

}

contadorLocalStorage()