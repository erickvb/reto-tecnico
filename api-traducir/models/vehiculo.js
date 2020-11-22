

'use strict';
const JSONRemap = require('jsonremap');
module.exports = {
    parsearKeys : function(data){

        return JSONRemap(data, this._getModelVehiculo());
 
    },
    _getModelVehiculo: function(){
      return {
            "nombre": "name",
            "modelo": "model",
            "fabricante":"manufacturer",
            "costo_creditos":"cost_in_credits",
            "colores_piel":"skin_colors",
            "longitud":"length",
            "velocidad_max_atmosfera":"max_atmosphering_speed",
            "tripulacion":"crew",
            "pasajeros":"passengers",
            "capacidad_carga":"cargo_capacity",
            "consumibles":"consumables",
            "clase_vehiculo":"vehicle_class",

            "pilotos": {
                "getter": "pilots",
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