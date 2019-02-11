var listaPersonas = new Array();

function addPersona() {
  var nuevaPersona = new Object();
  nuevaPersona.nombre = jQuery("#inputNombre").val(); // se pone un # porque jQuery actúa con selectores de CSS a los que aplica una funcion que se define a continuacion, en este caso val(), que devuelve el valor.
  // jQuery() devuelve un objeto de jQuery por lo que no podemos aplicar valores de DOM como .value, por lo que tendriamos que aplicarle funciones de jQuery.
  // para acceder al elemento DOM al que se refiere el objeto de jQuery se haria con .get(0)
  // Si quisieramos seleccionar elementos por su etiqueta de input y cambiar el borde seria: jQuery("input").css("border-color", "red")
  nuevaPersona.apellidos = jQuery("#inputApellidos").val();
  nuevaPersona.edad = jQuery("#inputEdad").val(); // jQuery("") = $("") es lo mismo usar uno u otro, ambos seleccionan elementos
  nuevaPersona.edad = parseInt(nuevaPersona.edad);
  nuevaPersona.email = jQuery("#inputEmail").val();

  listaPersonas [listaPersonas.length] = nuevaPersona;

  listarPersonas();
}

function listarPersonas() {
  /*
  var divListado = document.getElementById("divListado");
  divListado.innerHTML = "<h1>Lista de personas</h1>";
  */

  $("#divListado").html("<h1>Lista de personas</h1>"); // Esta linea sustituye con Jquery las lineas anteriores comentadas
  
  for (var i = 0; i < listaPersonas.length; i++) {
    var persona = listaPersonas [i];
    $("#divListado").html(
      $("#divListado").html() + "<p>Nombre: " + persona.nombre + ", Apellidos: " + persona.apellidos + ", Edad: " + persona.edad + ", &lt;" + persona.email + "&gt; </p>"
    );// Estas lineas desde el $ sustituyen con Jquery las lineas posteriores comentadas
    
    /*
    divListado.innerHTML += "<p>Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", &lt;" + persona.email + "&gt; </p>";
    */
  }
}


// Para modificar se puede con lo que sabemos
// Para eliminar con .slice