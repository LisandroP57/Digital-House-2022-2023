let archivoTareas = require('./funcionesDeTareas');
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach((tarea, i) => {
            console.log(`${i + 1}. ${tarea.titulo} - ${tarea.estado}`);
        })
        console.log()
        break;
    case "crear":
        let titulo = process.argv[3];
        if(typeof titulo === "undefined"){
            console.log("Debes pasar un titulo de tarea")
            return;
        }
        let tarea = {
            titulo,
            estado: "pendiente",
        }    
        archivoTareas.guardarTarea(tarea)
        break;
    case "filtrar":
        let estado = process.argv[3];
        if(typeof estado === "undefined"){
            console.log("Debes pasar un titulo de tarea")
            return;
        }
        archivoTareas.filtarPorEstado(estado)
        break;
    case undefined:
        console.log();
        console.log('Atencion tienes que pasarme un accion');
        console.log('Los acciones disponibles son: listar');
        console.log('------------------------------------------');
        console.log();
    }