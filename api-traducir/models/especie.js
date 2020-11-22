'use strict';
const JSONRemap = require('jsonremap');
module.exports = {
    parsearKeys : function(data){

        return JSONRemap(data, this._getModelEspecie());
 
    },
    _getModelEspecie: function(){
        
        return {
            "nombre": "name",
            "clasificacion": "classification",
            "designacion":"designation",
            "altura_media":"average_height",
            "colores_piel":"skin_colors",
            "colores_cabello":"gravity",
            "colores_ojo":"eye_colors",
            "promedio_vida":"average_lifespan",
            "origen":"homeworld",
            "lenguaje":"language",
           
            "personas": {
                "getter": "people",
                "defaultValue": [],
                "unwind": false,
            },
            "peliculas":{
                "getter": "films",
                "defaultValue": [],
                "unwind": false,
            },
            
            "fecha_creado":"created",
            "fecha_actualizado":"edited",
            "detalle":"url"
        }
        
    }



}