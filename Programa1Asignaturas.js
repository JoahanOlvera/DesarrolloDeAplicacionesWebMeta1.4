let size = process.argv[2];
let calificacionEntrada = process.argv[3];
let fechaEntrada = process.argv[4];

const nombres = ["Calculo Diferencial", "Algebra Superior", "Comunicacion Oral y Escrita", "Int. a la Ingeniería",
"Metodología de la programacion", "Ingles I", "Desarrollo Profesional del Ingeniero", "Calculo Integral",
"Probabilidad y Estadistica", "Mecanica Vectorial", "Quimica", "Programacion y Metodos Numericos",
"Ingles II", "Calculo Multivariable", "Ecuaciones Diferenciales", "Electricidad y Magnetismo", "Metodología de Investigacion", 
"Programación Estructurada", "Elaboración de Documentación Técnica", "Señales y Sistemas", "Matematicas Discretas", 
"Circuitos Electricos", "Circuitos Digitales", "Programacion Orientada a Objetos", "Ciencia, Tecnología y Sociedad", "Administracion"];
const claves = [33523, 33524, 33526, 33527, 33525, 33529, 33528, 33530, 33531, 33532, 33533, 33534, 33535, 34948, 33537, 33538, 33541, 36276, 36277];
let asignaturas = [];

try{
function generarFechaAleatoria(){
    const fechaInicio = new Date('2021-01-01'); 
    const fechaFin = new Date('2023-06-30');

    const fechaInicioMs = fechaInicio.getTime();
    const fechaFinMs = fechaFin.getTime();

    const timestampAleatorio = fechaInicioMs + Math.random() * (fechaFinMs - fechaInicioMs);
    const fechaAleatoria = new Date(timestampAleatorio);

    const dia = fechaAleatoria.getDate().toString().padStart(2, '0');
    const mes = (fechaAleatoria.getMonth() + 1).toString().padStart(2, '0');
    const año = fechaAleatoria.getFullYear();

    return `${dia}/${mes}/${año}`;
}
const fechaAleatoria = generarFechaAleatoria();
//console.log("Fecha aleatoria: ", fechaAleatoria);

function generarNumeroFloatAleatorio() {
    return (parseFloat(Math.random() * (100.0 - 0.0) + 0.0).toFixed(2));
}

// Ejemplo de uso
const numeroAleatorio = generarNumeroFloatAleatorio();
//console.log('Número Float Aleatorio:', numeroAleatorio);

function generarCreditosAleatorios(){
    return (Math.random() * (10 - 1) + 1).toFixed(0);
}

const creditosAleatorios = generarCreditosAleatorios();
//console.log("Numero de creditos aleatorios ", creditosAleatorios);

for(let i=0; i<size; i++){
    let fechaNueva = generarFechaAleatoria();
    asignaturas.push(asignatura = {clave : claves[i], 
        creditos: generarCreditosAleatorios(), 
        nombre: nombres[i], 
        calificacion: generarNumeroFloatAleatorio(), 
        fecha: fechaNueva}
    );}

console.log(asignaturas);
console.log(calificacionEntrada);
console.log(fechaEntrada);

function convertirFecha(fechaEnString){
    const partesFecha = fechaEnString.split('/');
    const dia = parseInt(partesFecha[0], 10);
    const mes = parseInt(partesFecha[1], 10) -1;
    const year = parseInt(partesFecha[2], 10);

    return new Date(year, mes, dia);
}

function convertirFechaStr(fecha){
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear();

    return `${dia}/${mes}/${año}`;
}

const asignaturasFiltradasPorCalificaciones = asignaturas.filter(asignatura => asignatura.calificacion < calificacionEntrada);
const asignaturasFiltradasPorFecha = asignaturasFiltradasPorCalificaciones.filter(asignatura => convertirFecha(asignatura.fecha) < new Date(fechaEntrada));

const resultados = asignaturasFiltradasPorFecha.map(asignatura => ({
    calificacion: asignatura.calificacion,
    fecha: convertirFechaStr(convertirFecha(asignatura.fecha))
}));

console.log(resultados);
}catch(error){
    console.log("Error en la ejecución del programa");
}