const servicio = require("./servicioDatosConCallbacks");

servicio.getDatos(1, 3000, function() {
    servicio.getDatos(2, 500, function() {
        servicio.getDatos(3, 4000, function() {
            servicio.getDatos(4, 700, function() {
                servicio.getDatos(5, 3500, function() {
                    console.log("Servicio terminado, gracias por la espera");
                });
            });
        });
    });
});