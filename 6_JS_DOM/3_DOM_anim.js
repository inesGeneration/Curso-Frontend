// cogemos todos los div con clase circulo
var arrayDiv = document.getElementsByClassName("circulo");

// los recorremos para pausarlos con js
for (var i = 0; i < arrayDiv.length; i++) {
  arrayDiv[i].style.webkitAnimationPlayState = "paused";
}

// cogemos el div padre con la clase marco y le añadimos un input
var divMarco = document.getElementsByClassName("marco")[0];
var boton = divMarco.appendChild(document.createElement("input"));

boton.setAttribute("type", "button");
boton.setAttribute("value", "¡Pero animate!"); // value es el contenido


// creamos una funcion para animar de nuevo los circulos
function cuandoSePulsaElBoton() {
  for (var i = 0; i < arrayDiv.length; i++) {
    arrayDiv[i].style.webkitAnimationPlayState = "running";
  }
};

// hacemos que cuando se pulse el boton se active la funcion, si lo hicieramos en html seria <INPUT type="button" value="¡Pero animate!" onclick="cuandoSePulsaElBoton();"/>
boton.setAttribute("onclick", "cuandoSePulsaElBoton();");



///// Ahora hacemos un boton que cada vez que se pulse pase de activado a desactivado
var botonAmbos = divMarco.appendChild(document.createElement("input"));

botonAmbos.setAttribute("type", "button");
botonAmbos.setAttribute("value", "Parar y activar"); // value es el contenido


function cuandoSePulsaElBotonAmbos() {
  for (var i = 0; i < arrayDiv.length; i++) {
    if (arrayDiv[i].style.webkitAnimationPlayState == "paused") {
      arrayDiv[i].style.webkitAnimationPlayState = "running";
    }
    else if (arrayDiv[i].style.webkitAnimationPlayState != "paused") {
      arrayDiv[i].style.webkitAnimationPlayState = "paused";
    }
  }
}

// hacemos que cuando se pulse el boton se active la funcion, si lo hicieramos en html seria <INPUT type="button" value="¡Pero animate!" onclick="cuandoSePulsaElBoton();"/>
botonAmbos.setAttribute("onclick", "cuandoSePulsaElBotonAmbos();");
