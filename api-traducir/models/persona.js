'use strict';
const JSONRemap = require('jsonremap');
module.exports = {
    parsearKeys : function(data){

        return JSONRemap(data, this._getModelCliente());
 
    },
    _getModelCliente: function(){
        return {
            "nombre": "name",
            "talla": "height",
            "peso":"mass",
            "color_pelo":"hair_color",
            "color_piel":"skin_color",
            "color_ojo":"eye_color",
            "anio_nacimiento":"birth_year",
            "sexo":"gender",
            "origen":"homeworld",
           
            "peliculas": {
                "getter": "films",
                "defaultValue": [],
                "unwind": false,
            },
            "especies":{
                "getter": "species",
                "defaultValue": [],
                "unwind": false,
            },
            "vehiculos":{
                "getter": "vehicles",
                "defaultValue": [],
                "unwind": false,
            },
            "naves_estelares":{
                "getter": "starships",
                "defaultValue": [],
                "unwind": false,
            },
            "fecha_creado":"created",
            "fecha_actualizado":"edited",
            "detalle":"url"
        }
        
    }



}