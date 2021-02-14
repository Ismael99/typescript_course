//Interface crear tipos de datos

interface Student{
    name:string
    age:number
}

const estudiar = (I:Student):void=>{
    console.log(I.name, I.age);
}

let I_:Student = {name:'Ismael', age:22};
estudiar(I_);

//Parametros opcionales
interface laptops{
    marca:string
    ram:number
    ssd?:number
}

let mi_laptop = {marca:'HP', ram:8, ssd:500};

const mostrarLaptop = (mi_laptop:laptops):string => {
    if(mi_laptop.ssd){
        return `Marca: ${mi_laptop.marca}, ram: ${mi_laptop.ram}GB ssd: ${mi_laptop.ssd}GB `;
    }
    else{
        return `Marca: ${mi_laptop.marca}, ram: ${mi_laptop.ram}GB`;
    }
} 

console.log(mostrarLaptop(mi_laptop));

//Parametros de solo lectura
 interface Persona{
     readonly name:string
     age:number
 }

 let yo:Persona = {name:'Ismael', age:33};

 //muestra advertencia la modificar un atributo readonly
 yo.name='bernardo'

 console.log(yo);

 
 //Interfaces en funciones
 interface General{
    (name:string, last_name:string, age:number):void
}

let funcionGeneral:General;
funcionGeneral = function(name:string, last_name:string, age:number):void{
    console.log(`${name} con el apellido ${last_name} y la edad ${age}`);
}

funcionGeneral('ismael', 'orellana', 22);

