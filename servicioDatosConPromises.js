function obtenDatosDeInternet(id, duracion) {
    return new Promise((resolve, reject) => {
        console.log("Proceso ", id, " obteniendo datos de Internet");
        setTimeout(() => {
            console.log("Transferencia ", id, " terminada");
            resolve();
        }, duracion);
    });
}


module.exports.getDatos = obtenDatosDeInternet;