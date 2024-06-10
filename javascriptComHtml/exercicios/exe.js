let name = document.querySelector("#user_name")
let age = document.querySelector("#user_age")
let button = document.querySelector("#submit_button")

button.onclick = function() {
    if (age.value >= 18) {
        console.log("Pode vir retirar sua habilitação!")
    } else {
        console.log("Dirige sem habilitação mesmo, so não faz besteira!")
    }
}