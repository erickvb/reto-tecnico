'use strict';
const JSONRemap = require('jsonremap');
module.exports = {
    parsearKeys : function(data){

        return JSONRemap(data, this._getModelPelicula());
 
        
    },
    _getModelPelicula: function(){
         
        return {
            "titulo": "title",
            "id_episodio": "episode_id",
            "periodo_orbital":"orbital_period",
            "rastreo":"opening_crawl",
            "director":"director",
            "productor":"producer",
            "fecha_lanzamiento":"release_date",
           
           
            "personajes": {
                "getter": "characters",
                "defaultValue": [],
                "unwind": false,
            },
            "planetas": {
                "getter": "planets",
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

            "especies": {
                "getter": "species",
                "defaultValue": [],
                "unwind": false,
            },
            "fecha_creado":"created",
            "fecha_actualizado":"edited",
            "detalle":"url"
        }
        
    }


}
