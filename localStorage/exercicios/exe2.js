function serieFavorita(evento) {
    evento?.preventDefault()
    const formulario = document.querySelector('form')
    const dadosFormulario = new FormData(formulario)

    const p = document.querySelector('p')
    const serie = dadosFormulario.get("serieArmazenada")
    localStorage.setItem("serieArmazenada", serie)

    if (localStorage.getItem("serie")) {
        p.textContent = `Deseja adicionar mais alguma série além de ${serie}?`
    }
}

serieFavorita()
