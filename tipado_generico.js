//Error de any
var name_str = 'ismael';
var name_any = 'algo';
//name_str.
//name_any.
//No hace uso de las clases propias del tipo de datos que almacenan
//Generico
function funcion(dato) {
    return dato;
}
var dato = funcion(1);
//Funciones genericas con arrow functions
var arrow = function (algo) {
    return algo;
};
var algo = arrow('h');
//Clases genericas, para que puedan contener datos  funciones de tipo generico
var peopple = /** @class */ (function () {
    function peopple(name, age) {
        this.name = name;
        this.age = age;
    }
    peopple.prototype.show = function () {
        return this.age;
    };
    return peopple;
}());
var student = new peopple('ismael', 33);
console.log(student.show());
//se debe de especificar el tipo de dato en la instancia de la interfaz
var people = { name: 'ismael', age: '33' };
