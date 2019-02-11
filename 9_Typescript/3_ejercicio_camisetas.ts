// 1 - Esquema de interfaz, sin terminar 
interface IProducto {
  // DEFINIR MÉTODO
  /*
  precio: number; 
  */
  // Se pueden poner propiedades en las interfaces pero por norma general no se ponen porque si estan en una interfaz son publicas y es recomdable poner todas las propiedades de las clases privadas
  mostrar() : void;
}

class Producto implements IProducto {
  private precio: number;
  private nombre: string;
  public constructor(pre : number, nom : string) {
    this.precio = pre;
    this.nombre = nom;
  }
  
  //// Métodos de ACCESO
  
  // Precio es de lectura y escritura
  public getPrecio() : number {return this.precio; }
  public setPrecio(nuevoPrecio : number) : void {
    if (nuevoPrecio < 0) {
      console.error("Precio negativo!");
    }
    this.precio = nuevoPrecio; }
  // Nombre es solo de lectura
  public getNombre() : string { 
    if (this.nombre == "") {
      console.error("Nombre vacío");
    }
    return this.nombre;
  }

  public mostrar(){
    console.log(`Producto ${this.getNombre()}, precio: ${this.getPrecio()}`);
  }
}

// 2 - Esquema de clase camiseta, sin terminar
class Camiseta extends Producto {
  // Cómo indicar campos
  private talla : string;
  private color : string;
  // Como crear un constructor (faltan campos)
  constructor(pre : number, tall : string, col : string) {
    super(pre, "camiseta"); // si está en modo "extends" nos obliga a llamar a las propiedades del constructor del padre mediante super();
    
    // this.precio = pre; // Precio es privado asi que no podemos acceder
    // this.setPrecio();  // Podriamos acceder mediante el metodo pero no es necesario porque lo podemos hacer con super.

    this.talla = tall;
    this.color = col;
  }

  // Talla es de lectura y escritura
  public getTalla() : string { 
    if (this.talla == "") {
      console.error("Nombre vacío");
    }
    return this.talla;
  }
  public setTalla(nuevaTalla : string) : void {
    if (nuevaTalla == "") {
      console.error("No ha introducido una talla!");
    }
    this.talla = nuevaTalla; }

  // Color es de lectura y escritura
  public getColor() : string {
    if (this.color == "") {
      console.error("Nombre vacío");
    }
    return this.color; }
  public setColor(nuevoColor : string) : void {
    if (nuevoColor == "") {
      console.error("No ha introducido un color!");
    }
    this.color = nuevoColor; }

}

// 3 - Segunda clase, sin terminar
class Libro extends Producto {
  constructor (pre : number, private titulo : string) {
    super(pre, "libro")
  }

  // Titulo es de lectura y escritura
  public getTitulo() : string {return this.titulo; }
  public setTitulo(nuevoTitulo : string) : void {this.titulo = nuevoTitulo; }

}

let miLibro : Libro = new Libro (900, "Mi jodido libro");
miLibro.mostrar();

let camisetaJorge : Camiseta;
camisetaJorge = new Camiseta (17, "XXL", "arcoiris");
camisetaJorge.mostrar();

// Puede valer cualquier cosa que implemente IProducto
let algunProducto : Producto;
algunProducto = new Camiseta(19, "s", "roja");
algunProducto.mostrar();

//Cambiamos a otra cosa
algunProducto = miLibro;
algunProducto.mostrar();
