// mudar imagem  para https://hips.hearstapps.com/hmg-prod/images/2022-kia-stinger-gt-209-1615916144.jpg?crop=0.699xw:0.785xh;0.164xw,0.0196xh&resize=768:*

//buscar elemento no html

let imagem = document.querySelector("img")
console.log(imagem)

// mudar atributo com src 

imagem.setAttribute('src', 'https://hips.hearstapps.com/hmg-prod/images/2022-kia-stinger-gt-209-1615916144.jpg?crop=0.699xw:0.785xh;0.164xw,0.0196xh&resize=768:*')

 let botao = document.querySelector("button")
 let idade = document.querySelector("#id_idade")
 let nome = document.querySelector("#id_user")

 botao.onclick = function(){
    alert(`O seu nome é ${nome.value} e sua idade é ${idade.value}!`)
 }