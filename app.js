/*
e -> enter
o -> ober
i -> imes
a -> ai
u -> ufat
*/

let imagen = document.getElementById("xs");
function encriptar(){
    
    var texto = document.getElementById("encrip").value.toLowerCase();

    var textcir = texto.replace(/e/gm,"enter");
    textcir = textcir.replace(/o/gm,"ober");
    textcir = textcir.replace(/i/gm,"imes");
    textcir = textcir.replace(/a/gm,"ai");
    textcir = textcir.replace(/u/gm,"ufat");


    document.getElementById("encrip").value = "";
    imagen.setAttribute("hidden", "true");
    document.getElementById("texto2").innerHTML = textcir


}

function desencriptar(){

    var texto = document.getElementById("encrip").value.toLowerCase();

    var textcir = texto.replace(/enter/gm,"e");
    textcir = textcir.replace(/ober/gm,"o");
    textcir = textcir.replace(/imes/gm,"i");
    textcir = textcir.replace(/ai/gm,"a");
    textcir = textcir.replace(/ufat/gm,"u");

    document.getElementById("encrip").value = "";
    imagen.setAttribute("hidden", "true");
    document.getElementById("texto2").innerHTML = textcir
}

function copy(){
    
    var cop = document.getElementById('texto2');
    navigator.clipboard.writeText(cop.innerHTML);
}
    
