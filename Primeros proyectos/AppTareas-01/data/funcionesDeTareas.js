const fs = require('fs');
const moduloTareas = {
    leerJSON : function(){
        const dataTareaJSON = fs.readFileSync('./app-tareas/tareasJSON.json', 'utf-8');
        const tareasParseado = JSON.parse(dataTareaJSON);
        return tareasParseado;
    }
}

module.exports = moduloTareas;