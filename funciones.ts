//Sintaxis de funciones
const suma = (a:number, b:number): number => a + b;


//Funciones 'Normales'
function sum (a: number, b:number): number{
    return a + b;
}


console.log(suma(1, 5));

console.log(sum(3,8));

//Tipos de funciones
function vacia():void{
    console.log('Hola Mundo');
}

const vacia_2 = ():void =>{
    console.log('Hola a Todos');
}

vacia()
vacia_2()


//Parametros opciones
const opcionales = (name:string, last_name:string, age?:number) =>{
    if(age){
        console.log(`Nombre:${name}, Apellido: ${last_name} y Edad: ${age}`);
    }
    else{
        console.log(`Nombre:${name}, Apellido: ${last_name}`);
    }
    
}

opcionales('Ismael', 'Portillo');


//Parametros por defecto

const defecto = (name:string = 'Ismael'):void =>{
    console.log(name);
}

defecto('Petronilo');

//Parametros Rest
const rest = (name:string, ...lenguajes:string[]):void =>{
    console.log(`Mi nombre es: ${name}, lenguajes favoritos: ${lenguajes}`);
}

rest('Ismael', ' Python', ' Javascript', ' c++');