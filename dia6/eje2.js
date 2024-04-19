class Rectangulo{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    area(){
        return this.alto * this.ancho;
    }
    perimetro(){
        return 2 * (this.alto + this.ancho);
    }
}

const Rtl = new Rectangulo (5,10);

const area = Rtl.area();
const perimetro = Rtl.perimetro();

console.log(`Area del rectangulo: ${area}`);
console.log(`Perimetro del rectangulo: ${perimetro}`);

