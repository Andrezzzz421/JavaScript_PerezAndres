/* var vehiculo = {
    tipo:"Airbus A320",
    asientos:200,
    bandejas:200,
    cinturones:200,
    luces:"por cada dos asientos",
    compartimientossuperiores: 30,
    carritosdeservicios: 3,
    baños: 2,
}
console.log("tipo:", vehiculo.tipo);
console.log("asientos:", vehiculo.asientos);
console.log("bandejas:", vehiculo.bandejas);
console.log("cinturones:", vehiculo.cinturones);
console.log("luces:", vehiculo.luces);
console.log("compartimientossuperiores:", vehiculo.compartimientossuperiores);
console.log("carritosdeservicios:",vehiculo.carritosdeservicios);
console.log("baños:",vehiculo.baños); */

function crearVehiculo() {
    var vehiculo = {
        tipo: "Airbus A320",
        asientos: 200,
        bandejas: 200,
        cinturones: 200,
        luces: "por cada dos asientos",
        compartimientossuperiores: 30,
        carritosdeservicios: 3,
        baños: 2
    };
    return vehiculo;
}

var Vehiculito = crearVehiculo();
console.log(Vehiculito);