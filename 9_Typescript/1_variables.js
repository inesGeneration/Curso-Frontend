// para instalar typescript: npm install -g typescript
// comando tsc para llamar a typescript y transpilar a js
var unNumero; // En typescript hay que definir las variables del tipo que son, no son dinamicas como las variables de JS que van cambiando segun el tipo de valor  que tengan
// Como la variable ya esta definida en el archivo js, visual studio code lo reconoce y muestra un error
unNumero = 12;
/*
unNumero = "un numero";
*/ // Es de tipado fuerte, por lo que no puede variar el tipo de una variable, si se definio como numero siempre sera numero. Esto daria error.
console.log("Un numero" + unNumero);
// Todo JS funciona en TS
// TS = JS + TS (con cosas nuevas, como el tipado fuerte y cosas de clases)
var unTexto = "Un texto"; // Si escribimos var en TS es una variable dinmaica
console.log(unTexto);
alert(unTexto);
var siONo = false;
siONo = true;
if (siONo) {
    console.log("Pues parece que si.");
}
var miUnion;
miUnion = "Puede ser cadena";
miUnion = 3434;
miUnion = false; // no lo admite porque esta definido como numero o string, si añadimos boolean si lo admite
miUnion = unTexto == "Un texto" && unNumero == 12; // En este caso le preguntamos que si unTexto == "Un texto", en este caso da true y unNumero == 12, que tambien da true, asi que true && true nos dara true
var miCumple = { dia: 7, mes: 10, anio: 1982 };
console.log("Cumplo años el " + miCumple.dia + " del " + miCumple.mes);
