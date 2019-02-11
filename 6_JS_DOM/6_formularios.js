/* 

// 1 - Validar que el usuario introduzca un email y contraseña
1.1 - Marcar en rojo los campos que no sean rellenados

// 2 - Comprobar que sean iguales entre si
2.1 - Marcar en verde cuando sean iguales
2.2 - En naranja cuando no

// 3 - Cuando este correcto, indicar "Regustrado con exito" y el fondo de table en verde
3.1 - Si hay algo mal, decir que esta mal
*/

function validar() {
  var tablaForm = document.getElementById("form");
  var inputForm = tablaForm.getElementsByTagName("input");

  var inputFormId = new Array();
  var elements = new Array();
  var inputValue = new Array();

  for (var i = 0; i < inputForm.length; i++) {
    inputFormId [i] = inputForm[i].id;
    elements [i] = document.getElementById(inputFormId[i]);
    inputValue [i] = elements[i].value;
  
    if (inputValue[i] == "") {
      elements [i].style.borderColor = "#B04040";
    }
    else { 
      elements [i].style.borderColor = "#FFFFFF";
    }
  } // Hasta aqui punto 1
/* // 2
  if (inputValue[0] == inputValue[1]) {
    document.getElementById(inputFormId[i]).style.borderColor = "green";
  }

  else {
    document.getElementById(inputFormId[i]).style.borderColor = "red";
  }

  if (inputValue[3] == inputValue[4]) {
    document.getElementById(inputFormId[i]).style.borderColor = "green";
  }

  else {
    document.getElementById(inputFormId[i]).style.borderColor = "red";
  }
*/
}


// GERMAN

function validarInputById(id) {
  var input = document.getElementById(id);
  var textoInput = input.value;
  if (texto == "") {
    input.style.borderColor = "red";
    return false;
  }
  else {
    input.style.borderColor = "";
    return true;
  }
}

function validarFormulario() {
  validarInputById("email");
  validarInputById("email_rep");
  validarInputById("password");
  validarInputById("password_rep");
}

function validarParInput(id_1, id_2) {
  var input_1 = document.getElementById(id_1);
  var input_2 = document.getElementById(id_2);
  if (input_1.value != input_2.value) {
    input_1.borderColor = "orange";
    input_2.borderColor = "orange";
  }
  else {
    input_1.borderColor = "orange";
    input_2.borderColor = "orange";
  }
}