class CuentaBancaria {
    constructor(numeroCuenta, saldoInicial) {
      this.numeroCuenta = numeroCuenta;
      this.saldo = saldoInicial;
    }
  
    depositar(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        console.log(`Se depositaron ${cantidad} unidades. Saldo actual: ${this.saldo}`);
      } else {
        console.log("La cantidad a depositar debe ser mayor que 0.");
      }
    }
  
    retirar(cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log(`Se retiraron ${cantidad} unidades. Saldo actual: ${this.saldo}`);
      } else {
        console.log("Fondos insuficientes o cantidad no válida para retirar.");
      }
    }
  }
  
  // Función para ingresar valores desde la consola
  function ingresarValoresDesdeConsola() {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    readline.question('Ingrese el número de cuenta: ', (numeroCuenta) => {
      readline.question('Ingrese el saldo inicial: ', (saldoInicial) => {
        const cuenta = new CuentaBancaria(numeroCuenta, parseFloat(saldoInicial));
        console.log(`Cuenta creada: Número de cuenta: ${cuenta.numeroCuenta}, Saldo inicial: ${cuenta.saldo}`);
  
        // Realizar operaciones en la cuenta
        readline.question('Ingrese la cantidad a depositar: ', (cantidadDeposito) => {
          cuenta.depositar(parseFloat(cantidadDeposito));
          readline.question('Ingrese la cantidad a retirar: ', (cantidadRetiro) => {
            cuenta.retirar(parseFloat(cantidadRetiro));
            readline.close();
          });
        });
      });
    });
  }
  
  // Llamar a la función para ingresar valores desde la consola
  ingresarValoresDesdeConsola();
  