//Interface crear tipos de datos
var estudiar = function (I) {
    console.log(I.name, I.age);
};
var I_ = { name: 'Ismael', age: 22 };
estudiar(I_);
var mi_laptop = { marca: 'HP', ram: 8, ssd: 500 };
var mostrarLaptop = function (mi_laptop) {
    if (mi_laptop.ssd) {
        return "Marca: " + mi_laptop.marca + ", ram: " + mi_laptop.ram + "GB ssd: " + mi_laptop.ssd + "GB ";
    }
    else {
        return "Marca: " + mi_laptop.marca + ", ram: " + mi_laptop.ram + "GB";
    }
};
console.log(mostrarLaptop(mi_laptop));
var yo = { name: 'Ismael', age: 33 };
//muestra advertencia la modificar un atributo readonly
yo.name = 'bernardo';
console.log(yo);
