

// funcion borde rojo


function toggleBorder(element) {
    if (element.classList.contains('clicked')) {
        element.classList.remove('clicked');
        element.classList.add('no-border');
    } else if (element.classList.contains('no-border')) {
        element.classList.remove('no-border');
        element.classList.add('clicked');
    } else {
        element.classList.add('clicked');
    }
} 

// funcion contador stickes

let contador1 = document.querySelector("#contador1")
let contador2 = document.querySelector("#contador2")
let contador3 = document.querySelector("#contador3")
const buton = document.querySelector('#total')
let respuestaTexto = document.querySelector("#total_contadores")


buton.addEventListener("click", function() {
    let contadorTotal = Number(contador1.value) + Number(contador2.value) + Number(contador3.value);
  if (contadorTotal >=10) {
    console.log('funciona')
    respuestaTexto.innerHTML = ('<strong>Llevas demasiados stickers</strong>');
  } else {
    respuestaTexto.innerHTML = (`Llevas ${contadorTotal} stickers`)
 }});

