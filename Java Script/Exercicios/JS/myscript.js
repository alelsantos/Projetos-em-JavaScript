function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 19;

msg.innerHTML =  `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){

// BOM DIA
img.src = 'Imagens/manha.png'
document.body.style.background = '#B0E0E6'
} else if (hora >= 12 && hora <= 18)  {

// BOA TARDE
img.src = 'Imagens/tarde.png'
document.body.style.background = '#ff7f00'
}else {

// BOA NOITE

img.src = 'Imagens/noite.png'


document.body.style.background = '#515154'


}
}