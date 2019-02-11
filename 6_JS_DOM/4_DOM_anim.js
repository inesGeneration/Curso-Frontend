// GERMAN

// cogemos todos los div con clase circulo

var arrayDiv = document.getElementsByClassName("circulo");

playPauseAnim("paused");
//playPauseAnim("play");

// creamos una funcion para animar de nuevo los circulos // en el HTML tendria que poner onclick="playPauseAnim('play');"
/*
function playPauseAnim(estado) {
  var playState = "paused";
  if (estado == "play") {
    playState = "running";
  }
  for (var i = 0; i < arrayDiv.length; i++) {
    arrayDiv[i].style.webkitAnimationPlayState = playState;
  }
}
*/


// Otra forma, creamos una funcion para animar de nuevo los circulos

function playPauseAnim(estado) {
  for (var i = 0; i < arrayDiv.length; i++) {
    arrayDiv[i].style.webkitAnimationPlayState = estado;
  }
  if (estado == "running") {
    document.getElementsByTagName("input")[0].setAttribute("onclick", "playPauseAnim('paused');");
  }
  else {
    document.getElementsByTagName("input")[0].setAttribute("onclick", "playPauseAnim('running');");
  }
}
