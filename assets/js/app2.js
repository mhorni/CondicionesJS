document.getElementById('ingresar').addEventListener('click', function() {
    let numero1 = document.querySelector('#opcion1').value;
    let numero2 = document.querySelector('#opcion2').value;
    let numero3 = document.querySelector('#opcion3').value;

    let clave = numero1 + numero2 + numero3;

    let mensaje = document.getElementById('mensaje');

    if (clave === '911') {
        mensaje.innerHTML = 'El password 1 es correcto';
       
    } else if (clave === '714') {
        mensaje.innerHTML = 'El password 2 es correcto';
      
    } else {
        mensaje.innerHTML = 'El password es incorrecto';
      
    }
});



























/*

// ....
let input1 = document.querySelector('#imput-1').value;
let input2 = document.querySelector('#imput-2').value;
let input3 = document.querySelector('#imput-3').value;

let sumasstickers = input1 + input2 + input3;
let messagetotal = document.querySelector('#message');
if(sumasstickers < 10){
    messagetotal.innerHTML = 'llevas x sticker';

} else {
    messagetotal.innerHTML = 'llevas mas 10 stickers';
}



// funcion validador

function ('pass'){
const pass1= document.querySelector("#select1").value;
const pass2 = document.querySelector("#select2").value;
const pass3 = document.querySelector("#select3").value;

const password = pass1 + pass2 + pass3;

if(password  === "911" ){
    alert("La Pass1  es correcta");
} else if ( password === "714"){
    alert("La pass2 es correcta");
}else {
    alert("pass incorrecta")
}

}
*/
