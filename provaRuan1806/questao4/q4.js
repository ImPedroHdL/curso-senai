let cont = 0
function enviarMsg(evento) {
    evento?.preventDefault()
    const formulario = document.querySelector('form')
    const dadosFormulario = new FormData(formulario)

    const msg = dadosFormulario.get("mensagem-usuario")

    const totMsgs = document.querySelector("#total-msgs")
    const ultimaMsg = document.querySelector("#ultima-mensagem")

    cont++
    totMsgs.textContent = `O total de mensagens enviadas foram de: ${cont}`
    ultimaMsg.textContent += `${msg}\n`
}