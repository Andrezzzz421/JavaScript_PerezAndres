class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    mostrarDetalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`);
    }
}
class Coche extends Vehiculo {
    constructor(marca, modelo, anio, numPuertas) {
        super(marca, modelo, anio);
        this.numPuertas = numPuertas;
    }

    mostrarDetalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}, Puertas: ${this.numPuertas}`);
    }
}

const miCoche = new Coche("Toyota", "Corolla", 2022, 4);
miCoche.mostrarDetalles(); 