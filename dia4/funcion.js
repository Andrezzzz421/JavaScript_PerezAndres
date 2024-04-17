function usuario(nombre, edad){
    this.nombre= nombre;
    this.edad = edad;
}

const Usuario2 = new usuario("andres", 17);
console.log(Usuario2);