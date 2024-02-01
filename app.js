/*
e -> enter
o -> ober
i -> imes
a -> ai
u -> ufat
*/



function encriptar(){
    
    var texto = document.getElementById("encrip").value.toLowerCase();
    var imagen = document.getElementById("xs");

    var textcir = texto.replace(/e/igm,"enter");
    textcir = textcir.replace(/o/igm,"ober");
    textcir = textcir.replace(/i/igm,"imes");
    textcir = textcir.replace(/a/igm,"ai");
    textcir = textcir.replace(/u/igm,"ufat");


    document.getElementById("encrip").value = "";
    imagen.setAttribute("hidden", "true");
    document.getElementById("texto2").innerHTML = textcir


}

function desencriptar(){

    var texto = document.getElementById("encrip").value.toLowerCase();
    var imagen = document.getElementById("xs");

    var textcir = texto.replace(/enter/igm,"e");
    textcir = textcir.replace(/ober/igm,"o");
    textcir = textcir.replace(/imes/igm,"i");
    textcir = textcir.replace(/ai/igm,"a");
    textcir = textcir.replace(/ufat/igm,"u");

    document.getElementById("encrip").value = "";
    imagen.setAttribute("hidden", "true");
    document.getElementById("texto2").innerHTML = textcir
}

function copy(){
    
    var cop = document.getElementById('texto2');
    navigator.clipboard.writeText(cop.innerHTML);
    //document.getElementById("texto2").value = "";
}
    

