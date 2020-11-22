const swapiService = require('../services/SwapiService');

const traducionService = require('../services/TraduccionService');

const ESTADO_OPERACION = require('../common/ESTADO_OPERACION')
module.exports = {
    obtenerRecurso: async function(entidad, tipoConsulta , valor) {
        
        try {
            console.log('call obtener recurso: entidad='+entidad+": tipo ="+ tipoConsulta+": valor="+valor);
            
           

           if(tipoConsulta=='listarTodos'){
                var response  = await swapiService.listarEntidad(entidad);
                //console.log("data obtneido spwi:",response.results);
                //parsear idioma
                let rsParse = traducionService.traducirEntidad(entidad,response.results);
                
                return {
                    "estado":ESTADO_OPERACION.EXITO,
                    
                    "cantidad": response.count,
                    "siguiente": response.next,
                    "anterior": response.previous,
                    "resultados":rsParse
                
                };

           }else if(tipoConsulta=='detalle'){
                var response  = await swapiService.obtenerDetalle(entidad,valor);
                return traducionService.traducirEntidad(entidad,response);
           }else{

                return {estado: ESTADO_OPERACION.PARAMETROS_INCORRECTOS, mensaje: "consulta no permtida"}; 
           }
            

        } catch (error) {
            console.log(error);
            return {estado: ESTADO_OPERACION.EXCEPTION, mensaje: "Ocurrio un error al procesar la informacion"};             
        }

    }

}