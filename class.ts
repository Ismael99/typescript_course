class vehiculo{
    marca:string
    fecha: string
    puertas:number

    constructor(marca:string, fecha:string, puertas:number){
        this.marca=marca
        this.fecha=fecha
        this.puertas=puertas
    }

    acelerar():void{
        console.log('Acelero');
    }
    frenar():void{
        console.log('Freno');
    }
}

const mi_vehiculo = new vehiculo('Fors', '03-01-99', 6);
console.log(mi_vehiculo);

mi_vehiculo.acelerar();
mi_vehiculo.frenar();
console.log(mi_vehiculo.fecha);

//Herencia

class Padre{
    name:string
    last_name:string
    age:number

    constructor(name:string, last_name:string, age:number){
        this.name=name
        this.last_name=last_name
        this.age=age
    }

    presentar():void{
        console.log(`Nombre: ${this.name}, apellido: ${this.last_name} y la edad: ${this.age}`);
    }
}

class Hijo extends Padre{
    carrera:string

    constructor(name:string, last_name:string, age:number, carrera:string){
        super(name, last_name, age)
        this.carrera=carrera
    }

    presentar_hijo():void{
        console.log(`Nombre: ${this.name}, apellido: ${this.last_name}, edad: ${this.age} y carrera: ${this.carrera}`);
    }

}

const hijo = new Hijo('Ismael', 'Portillo', 22, 'Ing en Sistemas');

console.log(hijo);
hijo.presentar_hijo();



