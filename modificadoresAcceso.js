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
//Publico
var Animal = /** @class */ (function () {
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    Animal.prototype.moverse = function () {
        console.log('Moviendose');
    };
    return Animal;
}());
var animal = new Animal('Oso', 'Café');
animal.moverse();
//Privado solo accesibles desde la clase donde se declaran
var animal2 = /** @class */ (function () {
    function animal2(name, color) {
        this.name = name;
        this.color = color;
    }
    animal2.prototype.sleep = function () {
        console.log('Estoy durmiendo...');
    };
    return animal2;
}());
var example = new animal2('gato', 'blanco');
example.sleep();
//Private
var people = /** @class */ (function () {
    function people(name, last_name) {
        this.name = name;
        this.last_name = last_name;
    }
    people.prototype.info = function () {
        console.log(name + " " + this.last_name);
    };
    return people;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, last_name, carrera) {
        var _this = _super.call(this, name, last_name) || this;
        _this.carrera = carrera;
        return _this;
    }
    student.prototype.show = function () {
        console.log(this.name, this.last_name);
    };
    return student;
}(people));
var I = new student('ismael', 'Orellana', 'ing sistemas');
//Desde fuera solo se accede lo public
