const monitoImg = document.querySelector('#monito-img')
const paraVerificador = document.querySelector('#para-verificador')
const btnVerificador = document.querySelector('#btn-verificador')
const passButton = document.querySelector('#btn-pass')
const paraPass = document.querySelector('#para-pass')

//Problema 1
const changeColor = () =>{
  monitoImg.style.border = "2px solid red"
}

const removeColor = () =>{
  monitoImg.style.border = "none"
}

let clickCount = 0

monitoImg.addEventListener('click', ()=>{
  clickCount++
  if(clickCount == 1){
    changeColor()
  }else if(clickCount == 2){
    removeColor()
    clickCount = 0
  }
})


//Problema 2
btnVerificador.addEventListener('click', () =>{
  const stickerUno = document.querySelector('#stickerUno').valueAsNumber
  const stickerDos = document.querySelector('#stickerDos').valueAsNumber
  const stickerTres = document.querySelector('#stickerTres').valueAsNumber
  let totalSticker = stickerUno + stickerDos + stickerTres
  if(totalSticker <= 10 && totalSticker > 0){
    paraVerificador.innerHTML = "Llevas "+ totalSticker +" sticker"
  } else if (totalSticker > 10){
    paraVerificador.innerHTML = "No puedes llevar más de 10 stickers"
  } else{
    paraVerificador.innerHTML = "No llevas ningún sticker"
  }
 })


 //Problema 3
function fillSelect(select){
  for(let i = 1; i < 10; i++){
    let option = document.createElement('option')
    option.value = i
    option.text = i
    select.appendChild(option)
  }
}

let selectUno = document.querySelector('#passUno')
let selectDos = document.querySelector('#passDos')
let selectTres = document.querySelector('#passTres')

fillSelect(selectUno)
fillSelect(selectDos)
fillSelect(selectTres)

passButton.addEventListener('click', () =>{
  selectUno = document.querySelector('#passUno')
  selectDos = document.querySelector('#passDos')
  selectTres = document.querySelector('#passTres')
  let password = selectUno.value + selectDos.value + selectTres.value
  if(password == "911"){
    paraPass.innerHTML = "La primera contraseña es correcta"
  } else if(password == "714"){
    paraPass.innerHTML = "La segunda contraseña es correcta"
  } else{
    paraPass.innerHTML = "La contraseña es incorrecta"
  }
})
