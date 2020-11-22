'use strict';

const fetch = require('node-fetch');
const util =  require('../common/util');

module.exports = {
    listarEntidad:  async function(entidad) {

        let url = util.obtenerTipoEntidad(entidad).uri;
        try {
          console.log("Uri get:"+url);
    
         
          let response = await fetch(url);
          if (response.status == 200) {
            let json = await response.json();

            return json;
          }
            
          throw new Error(response.status);
            
        
        }
       catch(err) { 
         // because the promise could error, it is advised to use
         // try/catch. With a Promise, you would .then(cb).catch(errHandler)
         // but async/await doesn't utilize callbacks.
    
         // perform error handling or you can bubble it up.
        throw err
       }
    },

    obtenerDetalle: async function(entidad, id) {
        let url = util.obtenerTipoEntidad(entidad).uri;
        url =`${url}${id}`;
        console.log("Uri get:"+url);
        try {
            console.log(url);
            let response = await fetch(url);

            if(response.status ==200){
                return await response.json();
            }
            else{
                return null; 
            } 
                
            
           
        
        } catch (error) {
            console.log(error);
            throw err
        }        
    }

}
