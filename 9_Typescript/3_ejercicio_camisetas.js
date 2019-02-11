var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Producto = /** @class */ (function () {
    function Producto(pre, nom) {
        this.precio = pre;
        this.nombre = nom;
    }
    //// Métodos de ACCESO
    // Precio es de lectura y escritura
    Producto.prototype.getPrecio = function () { return this.precio; };
    Producto.prototype.setPrecio = function (nuevoPrecio) {
        if (nuevoPrecio >= 0) {
            this.precio = nuevoPrecio;
        }
        else {
            console.log("Introduzca un precio mayor o igual a 0");
        }
    };
    // Nombre es solo de lectura
    Producto.prototype.getNombre = function () { return this.nombre; };
    Producto.prototype.mostrar = function () {
        console.log("Producto " + this.getNombre() + ", precio: " + this.getPrecio());
    };
    return Producto;
}());
// 2 - Esquema de clase camiseta, sin terminar
var Camiseta = /** @class */ (function (_super) {
    __extends(Camiseta, _super);
    // Como crear un constructor (faltan campos)
    function Camiseta(pre, tall, col) {
        var _this = _super.call(this, pre, "camiseta") || this;
        // this.precio = pre; // Precio es privado asi que no podemos acceder
        // this.setPrecio();  // Podriamos acceder mediante el metodo pero no es necesario porque lo podemos hacer con super.
        _this.talla = tall;
        _this.color = col;
        return _this;
    }
    // Talla es de lectura y escritura
    Camiseta.prototype.getTalla = function () { return this.talla; };
    Camiseta.prototype.setTalla = function (nuevaTalla) { this.talla = nuevaTalla; };
    // Color es de lectura y escritura
    Camiseta.prototype.getColor = function () { return this.color; };
    Camiseta.prototype.setColor = function (nuevoColor) { this.color = nuevoColor; };
    return Camiseta;
}(Producto));
// 3 - Segunda clase, sin terminar
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(pre, titulo) {
        var _this = _super.call(this, pre, "libro") || this;
        _this.titulo = titulo;
        return _this;
    }
    // Titulo es de lectura y escritura
    Libro.prototype.getTitulo = function () { return this.titulo; };
    Libro.prototype.setTitulo = function (nuevoTitulo) { this.titulo = nuevoTitulo; };
    return Libro;
}(Producto));
var miLibro = new Libro(900, "Mi jodido libro");
miLibro.mostrar();
var camisetaJorge;
camisetaJorge = new Camiseta(17, "XXL", "arcoiris");
camisetaJorge.mostrar();
// Puede valer cualquier cosa que implemente IProducto
var algunProducto;
algunProducto = new Camiseta(19, "s", "roja");
algunProducto.mostrar();
//Cambiamos a otra cosa
algunProducto = miLibro;
algunProducto.mostrar();
var otroLibro = new Libro(-20, "Mi otro jodido libro");
otroLibro.mostrar();
