//Error de any
const name_str:string='ismael';

const name_any:any='algo';

//name_str.
//name_any.
//No hace uso de las clases propias del tipo de datos que almacenan

//Generico

function funcion<T>(dato:T):T{
    return dato;
}
let dato = funcion(1);


//Funciones genericas con arrow functions
const arrow  = <T> (algo:T):T => {
    return algo;
} 
let algo = arrow('h');



//Clases genericas, para que puedan contener datos  funciones de tipo generico
class peopple<T>{
    name:string
    age:T
    constructor(name:string, age:T){
        this.name = name
        this.age = age
    }
    show():T{
        return this.age;
    }
}

let student = new peopple('ismael', 33)
console.log(student.show());

//Interfaces genericas
interface people_1<T>{
    name:string
    age:T
}

//se debe de especificar el tipo de dato en la instancia de la interfaz
let people:people_1<string> = {name:'ismael', age:'33'}