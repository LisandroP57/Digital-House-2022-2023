let fs = require('fs');
let process = require('process');
let accion = process.argv[2];
let titulo = process.argv[3];
let estado = process.argv[4];
let tareasJson = fs.readFileSync('./tareas.json', {encoding : 'utf-8'});
let tareasParseadas = JSON.parse(tareasJson)

switch (accion) {
    case 'listar':
        if (tareasParseadas.length === 0){
            console.log('La lista de  tareas esta vacia');
        }else{
             console.log('•-----------------------------•')
             for(let i = 0; i < tareasParseadas.length; i++){
                 console.log(`${i+1} - Titulo: ${tareasParseadas[i].titulo}\n    Estado : ${tareasParseadas[i].estado}`);
                 console.log('•-----------------------------•');
            }
        }
        break;
    case 'crear':
        if (estado != 'pendiente' && estado != 'en-proceso' && estado != 'terminada' ) {
            console.log('estado tiene que ser, pendiente, en proceso o terminada');
        } else {
            tareasParseadas.push({
                titulo,
                estado
            })
            let tareasActualizadas = JSON.stringify(tareasParseadas);
            fs.writeFileSync('./tareas.json', tareasActualizadas, 'utf-8' )
            console.log(`Tarea ${titulo}, creada`);
        }
        break;
    case 'deshacer':
        tareasParseadas.pop()
        let tareasActualizadas = JSON.stringify(tareasParseadas);
        fs.writeFileSync('./tareas.json', tareasActualizadas, 'utf-8' )
        console.log('todo ok');
        break;
    case 'borrar':
        let tareasFiltradas = []
        for (let i = 0; i < array.length; i++) {
             if(tareasParseadas[i].titulo != titulo) {
                tareasFiltradas.push(tareasParseadas[i])
            }
        }
        let tareasF5 = JSON.stringify(tareasFiltradas);
        fs.writeFileSync('./tareas.json', tareasF5, 'utf-8' )
        console.log('Todo en orden.');
    break;
    case undefined:
        console.log('Debe pasar una accion ademas de ejecutar el app.');
        break;
    default:
        console.log('No comprendido, intente nuevamente.')
        break;
}