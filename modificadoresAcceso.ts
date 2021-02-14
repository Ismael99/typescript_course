//Publico
class Animal{
    public name:string
    public color:string
    public constructor(name:string, color:string){
        this.name=name
        this.color=color
    }

    public moverse():void{
        console.log('Moviendose');
    }

}

const animal = new Animal('Oso', 'Café');
animal.moverse();

//Privado solo accesibles desde la clase donde se declaran
class animal2{
    private name:string
    private color:string

    constructor(name:string, color:string){
        this.name=name
        this.color=color
    }

    sleep():void{
        console.log('Estoy durmiendo...');
    }
}

const example = new animal2('gato', 'blanco');

example.sleep();

//Private
class people{
    private name:string
    //Accesible tambien dentro de las clases que heredan de la clase donde se declaró (protected)
    protected last_name:string
    constructor(name:string, last_name:string){
        this.name=name
        this.last_name = last_name
    }
    info():void{
        console.log(`${name} ${this.last_name}`);
    }
}

class student extends people{
    carrera:string
    constructor(name:string, last_name:string, carrera:string){
        super(name, last_name);
        this.carrera=carrera;
    }

    show():void{
        console.log(this.name, this.last_name);
    }
}

const I = new student('ismael', 'Orellana', 'ing sistemas');

//Desde fuera solo se accede lo public



