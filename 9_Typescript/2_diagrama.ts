interface IProducto {
  precio : number;
  tipo : string;

  mostrar();
};

class Camiseta implements IProducto{
  precio : number;
  talla : string;
  color : string;
  tipo : "camiseta";

  mostrar(){
    console.log("Se quiere comprar una camiseta de " + this.precio + "€, de la talla " + this.talla + " y de color " + this.color);
  };
}

class Libro implements IProducto{
  precio : number;
  titulo : string;
  tipo : "libro";

  mostrar(){
    console.log("Se quiere comprar un libro de " + this.precio + "€ cuyo titulo es " + this.titulo);
  };
}

var Prod : IProducto;

/*
console.log(`
  <h3>¿Qué producto quiere?</h3>
`);
*/

Prod = new Camiseta;

if (Prod.tipo == "camiseta") {
  
}