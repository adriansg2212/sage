const http = require('http');
const fs = require('fs');//jalar ese codigo hacia nuestro archivo js.
const log4js = require('log4js');
// es de donde estoy el (.)
const logger = log4js.getLogger();
logger.level = 'debug';

http.createServer((require, response) =>{
    fs.readFile('./index.html', (error,html)=>{//callback => errores en la primera variable err, el 2do 
    //es el resultado si fue correctamente
    logger.info("conexión a la aplicación");    
    if (error){
        logger.warn('404 - not found');
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });
            response.write("404 - not found");
            response.end();
        }else{
            logger.info('200 - OK');
            response.write(html);
            response.end();            
        }

    }); //sabes que vamos a leer un archivo
}).listen(3000);//que puertos 
