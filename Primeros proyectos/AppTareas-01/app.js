const process = require('process');
const moduloTareas = require('./data/funcionesDeTareas');
const comando = process.argv[2];

switch (comando) {
    case "listar":
        const tareasArray = moduloTareas.leerJSON();
        console.log("Listado de tareas:");
        for (let i = 0; i < tareasArray.length; i++) {
            console.log (`${i + 1}. ${tareasArray[i].titulo} - ${tareasArray[i].estado}`);
        }
        break;
    case undefined:
        console.log("Atención, tienes que pasar una accion");
        console.log("Las acciones disponibles son: listar");
        break;
    default:
        console.log("No entiendo que quieres hacer")
        console.log("Las acciones disponibles son: listar");
        break;
}

/* Alumno Palavecino Lisandro */