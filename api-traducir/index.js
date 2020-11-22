'use strict';

const controlEntidad = require('./controller/EntidadController');
const util = require('./common/util');
const ESTADO_OPERACION = require('./common/ESTADO_OPERACION')

module.exports.index = async function(event, context, callback)  {
   let response;
    try {
        console.log(event); 
       
        console.log("path parameter:",event.pathParameters);
        console.log("path parameter:",event.queryStringParameters);
        let entidad;
        let idFiltro ;
        let tipoConsulta;

        if(null!=event.pathParameters ){
            entidad = event.pathParameters.entidad;
            idFiltro = event.pathParameters.id;

            if(idFiltro===undefined || idFiltro==0){
                tipoConsulta = 'listarTodos';
                idFiltro = 0;
            }else if(idFiltro > 0 ){
                tipoConsulta = 'detalle';
            }
        }
      
        let validarEntitad = util.obtenerTipoEntidad(entidad);
        let validarTipoCons =  util.obtenerTipoConsulta(tipoConsulta);
        console.log("validadando entidad result:", validarEntitad);
        if(null==validarEntitad){
            response = {
                statusCode: 406,
               
                body: JSON.stringify({estado: ESTADO_OPERACION.PARAMETROS_INCORRECTOS, mensaje: 'El parametro {entidad} es incorrecto',
                entidad_validos:['people','planets','films','species','vehicles','starships']
                })
            };
           return callback(null, response);
        }

       
        if(null==validarTipoCons){
            response = {
                statusCode: 406,
               
                body: JSON.stringify({estado: ESTADO_OPERACION.PARAMETROS_INCORRECTOS,  mensaje: 'El parametro {id} es incorrecto' })
            };
            return callback(null, response);
        }

        
        console.log('Invocando index');
        let resService = await controlEntidad.obtenerRecurso(entidad,validarTipoCons.codigo,idFiltro);
   
           
           response = {
               statusCode: 200,
              
               body: JSON.stringify(resService)
           };
        

        
        

    } catch (error) {
        console.log('ocurrio un error',error);
        response = {
            statusCode: 500,
           
            body: JSON.stringify({estado: ESTADO_OPERACION.EXCEPTION, mensaje: 'Ocurrrio un error al obtener los datos!' }),
        };


    }

   
    callback(null, response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
