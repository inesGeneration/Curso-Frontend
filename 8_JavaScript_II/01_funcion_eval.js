/* Este es solo con value
function ejecutarJavaScript() {
  var inputJS = document.getElementById("codJS");
  eval(inputJS.value);
  }
}
*/


// Este es con bucle for y una celda para indicar el numero de repeticiones
function ejecutarJavaScript() {
  var inputJS = document.getElementById("codJS");
  var veces = document.getElementById("inputVeces").value;
  
  eval(// eval trata al texto como javascript y se pueden introducir variables que llaman al texto que introduzca el usuario
  "for (var i_95 = 0; i_95 < " + veces + "; i_95++) {"
  + inputJS.value + "}");
}

/*
function codificarASCII() { // Esta funcion con escape te codifica en ASCII lo que introduces en el campo de texto del navegador
  var inputJS = document.getElementById("codJS");
  alert(escape(inputJS.value));
}
*/

function codificarASCII() { 
  var inputJS = document.getElementById("codJS");
  var enc = encodeURI(inputJS.value); // encodeURI lo codifica 
  var dec = decodeURI(enc); // decodeURI lo descodifica 
  alert(enc + "\n" + dec);
}