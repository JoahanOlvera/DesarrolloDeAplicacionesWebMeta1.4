const servicio = require("./servicioDatosConPromises.js");

console.log("Ejecución con .then()");
servicio.getDatos(1, 3000)
    .then(() => servicio.getDatos(2, 500))
    .then(() => servicio.getDatos(3, 4000))
    .then(() => servicio.getDatos(4, 700))
    .then(() => servicio.getDatos(5, 3500))
    .then(() => console.log("Servicio terminado, gracias por la espera"))
    .catch(error => console.error("Se produjo un error:", error));