/**
 * 
 */
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;


const getInfo = async(country) => {
    try {
        let coords = await lugar.getCoordenadas(country);
        let temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima ${ coords.city } es de ${ temp }`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ country }`;
    }
}

// SOLICITAR CLIMA 
getInfo(argv.direccion).then(console.log).catch(console.log);

/*
// solicitar coordenadas
lugar.getCoordenadas(argv.direccion)
    .then(resp => {
        // Solicitar información del clima
        clima.getClima(resp.lat, resp.lng)
            .then(resp => console.log(`La temperatura de ${ argv.direccion} es: ${ resp }°C`))
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err)); */