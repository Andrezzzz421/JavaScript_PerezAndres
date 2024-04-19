class Forma {
    calcularArea() {
      console.log("Método calcularArea() de la clase Forma. Este método debe ser anulado en las subclases.");
    }
  }
  
  class Circulo extends Forma {
    constructor(radio) {
      super();
      this.radio = radio;
    }
  
    calcularArea() {
      const area = Math.PI * this.radio ** 2;
      console.log(`El área del círculo es: ${area}`);
    }
  }
  
  class Triangulo extends Forma {
    constructor(base, altura) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      const area = (this.base * this.altura) / 2;
      console.log(`El área del triángulo es: ${area}`);
    }
  }
  
  // Crear una instancia de la clase Círculo
  const circulo = new Circulo(5);
  circulo.calcularArea();
  
  // Crear una instancia de la clase Triángulo
  const triangulo = new Triangulo(4, 6);
  triangulo.calcularArea();