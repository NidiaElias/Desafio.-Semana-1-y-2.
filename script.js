
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
function encriptar(){ 
	var texto=document.getElementById("input-texto").value;
	var nuevaStr = texto.replace("e", "emter");
	var nuevaStr = nuevaStr.replace("i", "imes");
	var nuevaStr = nuevaStr.replace("a", "ai");
	var nuevaStr = nuevaStr.replace("o", "ober");
	var nuevaStr = nuevaStr.replace("u", "ufat");

	document.getElementById("msg").value = nuevaStr;
  }

function desencriptar(){
	var texto=document.getElementById("input-texto").value;
	var desencriptar = texto.replace("emter", "e");
	var desencriptar = desencriptar.replace("imes", "i");
	var desencriptar = desencriptar.replace("ai", "a");
	var desencriptar = desencriptar.replace("ober", "o");
	var desencriptar = desencriptar.replace("ufat", "u");

	document.getElementById("msg").value = desencriptar;
}


function copiar() {

    var content = document.getElementById('msg');
    
    content.select();
    document.execCommand('copy');

    
}









