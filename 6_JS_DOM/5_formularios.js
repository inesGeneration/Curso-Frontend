function ponPrimeraMayus(texto) {
  var primeraLetra = texto.charAt(0).toUpperCase();
  var resto = texto.substring(1).toLowerCase();; // Desde el 2º al final
  return primeraLetra + resto;
}
/*
function validar() {
  var inputNombre = document.getElementById("nombre");
  var inputApell_1 = document.getElementById("primer_apellido");
  var inputApell_2 = document.getElementById("segundo_apellido");

  var nombre = inputNombre.value; // .getAttribute("value");
  var Apell_1 = inputApell_1.value;
  var Apell_2 = inputApell_2.value;

  var arrayInput = [inputNombre, inputApell_1, inputApell_2];
  var arrayCampo = [nombre, Apell_1, Apell_2];

  for (let i = 0; i < arrayInput.length; i++) {
    if (arrayCampo[i] == "") {
      arrayInput[i].style.borderColor = "#B04040";
    }
    else { 
      arrayInput[i].style.borderColor = "";
      arrayInput[i].value = ponPrimeraMayus(nombre); // Cuando nombre tenga algun valor, llamamos a la funcion que pone todas las primeras letras en mayusculas
    }
  }
}
*/


// ESTE NO ESTA BIEN, no pilla bien los arrays
function validar() {
  var tablaForm = document.getElementById("form");
  var inputForm = tablaForm.getElementsByTagName("input");

  for (var i = 0; i < inputForm.length; i++) {
    var inputFormId = new Array();
    inputFormId [i] = inputForm[i].id;
    var inputValue = new Array();
    inputValue [i] = inputFormId[i] + ".value";
  
    if (inputValue[i] == "") {
      inputFormId[i].style.borderColor = "#B04040";
    }
    else { 
      inputFormId[i].style.borderColor = "#FFFFFF";
    }
      
  }
  
}





////// GERMAN
/*

function validar() {
  var inputNombre = document.getElementById("nombre");
  var nombre = inputNombre.value; // .getAttribute("value");

  validarInput(inputNombre, nombre);

  var inputApell_1 = document.getElementById("primer_apellido");
  var Apell_1 = inputApell_1.value;

  validarInput(inputApell_1, Apell_1);

  var inputApell_2 = document.getElementById("segundo_apellido");
  var Apell_2 = inputApell_2.value;

  validarInput(inputApell_2, Apell_2);

  function validarInput(inputTexto, texto) {
    if (texto == "") {
      inputTexto.style.borderColor = "#B04040";
    }
    else { 
      inputTexto.style.borderColor = "";
      inputTexto.value = ponPrimeraMayus(nombre); // Cuando nombre tenga algun valor, llamamos a la funcion que pone todas las primeras letras en mayusculas
    }
  }
}

*/




  