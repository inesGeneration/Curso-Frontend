/*
    1 - Crear una funcion elemPorId(id) que devuelva un elemento por su Id
      1.1 - Probar la funcion
        elemPorId("div_form").style.backgroundColor = "red";

    2 - Crear una funcion cambiaAtribPorId(id, atributo, valor) que modifique el atributo de un elemento buscado por su Id
      2.1 - Probar la funcion
        Ej: cambiaAtribPorId("div_form", "style", "background-color:red");

    3 - Crear una funcion adjuntarElemPorId (id, etiqueta) que genere un elemento tipo "etiqueta" y lo adjunte a un elemento encontrado por Id
      3.1 - Probar la funcion
        Ej: adjuntarElemPorId ("div_form", "input");

    4 - Lo mismo que los 3 anteriores, pero en vez de buscar por su Id busque por clase (devuelve un array de elementos a los que hacer lo que sea)
*/

/*

////// YO

// Llamada a la funcion onclick
function generar() {
  adjuntarElemPorId("div_form", "input");
}

// 1
function elemPorId(id) {
  return document.getElementById(id);
}

// 2
function cambiaAtribPorId(id, atributo, valor) {
  var elemPorIdVar = elemPorId(id);
  elemPorIdVar.setAttribute(atributo, valor);  
}

// 3
function adjuntarElemPorId(id, etiqueta) {
  var elemPorIdVar = elemPorId(id);
  elemPorIdVar.appendChild(document.createElement(etiqueta));
}
*/

////// YO 

//// 4


// 1
function elemsByClassId(clase) {
  var elemsByClassArrayId = new Array();
  elemsByClassArray = document.getElementsByClassName(clase);
  for (var i = 0; i < elemsByClassArray.length; i++) {
    elemsByClassArrayId [i] = elemsByClassArray[i].id;
  }
  return elemsByClassArrayId;
}

// Llamada a la funcion onclick
function generar() {
    elemsByClassId("div_form")[0].style.backgroundColor = "red";
}


/*
// 2
function cambiaAtribPorClass(id, atributo, valor) {
  var elemsByClassArray = new Array(); 
  elemsByClassArray [i] = elemsByClass(clase);
  for (let i = 0; i < elemsByClassArray.length; i++) {
    elemsByClassArray[i].setAttribute(atributo, valor);  
  }
}

// 3
function adjuntarElemPorId(id, etiqueta) {
  var elemPorIdVar = elemPorId(id);
  elemPorIdVar.appendChild(document.createElement(etiqueta));
}



////// GERMAN

// Llamada a la funcion onclick
function generar() {
  cambiaAtribPorId("div_form", "style", "background-color:green");
  cambiaAtribPorId("div_form", "id", "nuevo_id_div");

  adjuntarElemPorId("nuevo_id_div", "input");
  adjuntarElemPorId("nuevo_id_div", "br");
  adjuntarElemPorId("nuevo_id_div", "input");
  adjuntarElemPorId("nuevo_id_div", "br");
  adjuntarElemPorId("nuevo_id_div", "img");
}

// 1
function elemPorId(id) {
  return document.getElementById(id);
}

// 2
function cambiaAtribPorId(id, atributo, valor) {
  elemPorId(id).setAttribute(atributo, valor);  
}

// 3
function adjuntarElemPorId(id, etiqueta) {
  elemPorId(id).appendChild(document.createElement(etiqueta));
}
*/