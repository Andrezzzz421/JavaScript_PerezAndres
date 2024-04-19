class Persona{
    constructor(nombre, edad, pais){
        this.nombre = nombre;
        this.pais = pais;
        this.edad = edad;
    }
    detalles(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, pais: ${this.pais}`);
    }
}
const persona1 = new Persona ("Juan",30,"España");
const persona2 = new Persona ("camilo",20,"Argentina");

persona1.detalles();
persona2.detalles();