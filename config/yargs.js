/** Configurar los parametros de entradas */

// comandos directos en yargs
let argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

module.exports = { argv }