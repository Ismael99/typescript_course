//Sintaxis de funciones
var suma = function (a, b) { return a + b; };
//Funciones 'Normales'
function sum(a, b) {
    return a + b;
}
console.log(suma(1, 5));
console.log(sum(3, 8));
//Tipos de funciones
function vacia() {
    console.log('Hola Mundo');
}
var vacia_2 = function () {
    console.log('Hola a Todos');
};
vacia();
vacia_2();
//Parametros opciones
var opcionales = function (name, last_name, age) {
    if (age) {
        console.log("Nombre:" + name + ", Apellido: " + last_name + " y Edad: " + age);
    }
    else {
        console.log("Nombre:" + name + ", Apellido: " + last_name);
    }
};
opcionales('Ismael', 'Portillo');
//Parametros por defecto
var defecto = function (name) {
    if (name === void 0) { name = 'Ismael'; }
    console.log(name);
};
defecto('Petronilo');
//Parametros Rest
var rest = function (name) {
    var lenguajes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        lenguajes[_i - 1] = arguments[_i];
    }
    console.log("Mi nombre es: " + name + ", lenguajes favoritos: " + lenguajes);
};
rest('Ismael', ' Python', ' Javascript', ' c++');
