//Tipado
let name: string = 'Ismael'
console.log(name)

//Tipos de datos
///Bool
let si:boolean = true;
let no: boolean = false;
console.log(si, no);

////Number
let numero: number = 3;
numero = 7;
console.log(numero);

////String
let name:string = 'Bernardo';
console.log(name);

//Array
let numeros:number[] = [1, 3, 5];
console.log(numeros)

let names: string[] = ['Ismael', 'Jose', 'Miguel'];
console.log(names);

//////Otra forma de declararlo
let numeros_2:Array<number> = [1, 3, 6, 7, 8];
console.log(numeros_2[1]);

//Tuplas
let tupla:[number, string, boolean];
tupla = [7, 'Ismael', true];
console.log(tupla);
console.log(tupla[1]);

let alumno ={
    name:'algo',
    age:11
}
