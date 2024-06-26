<<<<<<< HEAD
const p = document.getElementById("contador")
let cont = localStorage.getItem('numeros')

function contadorLocalStorage() {

    cont++
    localStorage.setItem('numeros', (cont))
    p.textContent = cont

}

=======
const p = document.getElementById("contador")
let cont = localStorage.getItem('numeros')

function contadorLocalStorage() {

    cont++
    localStorage.setItem('numeros', (cont))
    p.textContent = cont

}

>>>>>>> 219137e0dad3d1857b4abc10d6b893196b736496
contadorLocalStorage()