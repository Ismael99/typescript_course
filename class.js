var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehiculo = /** @class */ (function () {
    function vehiculo(marca, fecha, puertas) {
        this.marca = marca;
        this.fecha = fecha;
        this.puertas = puertas;
    }
    vehiculo.prototype.acelerar = function () {
        console.log('Acelero');
    };
    vehiculo.prototype.frenar = function () {
        console.log('Freno');
    };
    return vehiculo;
}());
var mi_vehiculo = new vehiculo('Fors', '03-01-99', 6);
console.log(mi_vehiculo);
mi_vehiculo.acelerar();
mi_vehiculo.frenar();
console.log(mi_vehiculo.fecha);
//Herencia
var Padre = /** @class */ (function () {
    function Padre(name, last_name, age) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }
    Padre.prototype.presentar = function () {
        console.log("Nombre: " + this.name + ", apellido: " + this.last_name + " y la edad: " + this.age);
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(name, last_name, age, carrera) {
        var _this = _super.call(this, name, last_name, age) || this;
        _this.carrera = carrera;
        return _this;
    }
    Hijo.prototype.presentar_hijo = function () {
        console.log("Nombre: " + this.name + ", apellido: " + this.last_name + ", edad: " + this.age + " y carrera: " + this.carrera);
    };
    return Hijo;
}(Padre));
var hijo = new Hijo('Ismael', 'Portillo', 22, 'Ing en Sistemas');
console.log(hijo);
hijo.presentar_hijo();
