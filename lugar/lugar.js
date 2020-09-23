const axios = require('axios');

// FUNCIÓNES
const getCoordenadas = async(direccion) => {

    const encodeURL = encodeURI(direccion);

    // instanciar la petición
    const instance = axios.create({
        //baseURL: 'https://geocode.xyz/?locate=Cali&json=1',
        baseURL: `https://geocode.xyz/?locate=${ encodeURL }&json=1`,
        header: {}
    });

    const resp = await instance.get();

    let status = resp.status;
    let data = resp.data;

    let lng = data.longt;
    let lat = data.latt;
    let country = data.standard.countryname;
    let city = data.standard.city;
    let prov = data.standard.prov;

    return {
        lng,
        lat,
        country,
        city,
        prov
    }
    /*
    // hacer la petición
    instance.get()
        .then(resp => {

            let status = resp.status;
            let data = resp.data;

            console.log('Status: ', status);
            console.log('Data: ', data);


        })
        .catch(err => {
            console.log('ERROR!!! -> ', err);

            try {
                console.log(err.response);
            } catch (error) {

            }
        }); */
}

module.exports = { getCoordenadas }