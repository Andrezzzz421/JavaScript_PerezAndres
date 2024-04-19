class A {
    constructor(argumento) {
      console.log(`Constructor de la clase A con argumento: ${argumento}`);
    }
  }
  
  class B extends A {
    constructor(argumento) {
      super(argumento);
      console.log(`Constructor de la clase B con argumento: ${argumento}`);
    }
  }
  
  class C extends B {
    constructor(argumento) {
      super(argumento);
      console.log(`Constructor de la clase C con argumento: ${argumento}`);
    }
  }
  
  // Crear una instancia de la clase C
  const instanciaC = new C("Hola, soy un argumento");
  