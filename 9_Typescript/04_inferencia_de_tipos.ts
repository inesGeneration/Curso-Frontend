let ejemploAny : any;
ejemploAny = 10;
ejemploAny = "aaa";
ejemploAny = true;

function dimeOSiONo(params:type) : boolean {
  let devolucion = true;
  if (devolucion) {
    return true;
  } else{
    return false;
  } 
}

function dameLoQueTuQuieras(params:type) : any { // No hacer esto. Si hay algun return, por defecto el tipo de return de la funcion es any, pero es mejor tiparlo para estar seguro de que el resulta do es correcto. En cuento asignes un tipo de valor al return, INFIERE y toma el tipo del tipo de valor del return. Ej: si tenemos return true, se convertirá en tipo boolean y a partir de entonces dará error si posteriormente se asigna otro tipo de valor. Ocurre igual con los tipos de variables.
// Si no hay return en la funcion por defecto sera tipo void
  let valor : any = 3;
  switch (valor) {
    case 1: return 1000; break;
    case 2: return "1000"; break;
    case 3: return false; break;
  }
}

function noMeDesNada() : void { // void es un tipo que quiere decir que no devuelve nada
  if (true) {
    return; // No podemos devolver nada
  }
}