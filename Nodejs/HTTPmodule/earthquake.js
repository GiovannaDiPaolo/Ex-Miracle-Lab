const https = require('https');

const args = process.argv.slice(2);
const magnitude = parseFloat(args[0]);

if (isNaN(magnitude) || magnitude <= 0) {
    console.error('Por favor, proporciona una magnitud válida.');
    process.exit(1);
}

const apiUrl = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson`;

https.get(apiUrl, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        const earthquakes = JSON.parse(data).features.filter((earthquake) => earthquake.properties.mag >= magnitude);

        console.log('****************************');
        console.log('USGS All Earthquakes, Past Hour');
        console.log('---------------------');
        console.log(`total: ${earthquakes.length}`);
        console.log(`status: ${response.statusCode}`);
        console.log('---------------------');

        earthquakes.forEach((earthquake) => {
            const properties = earthquake.properties;
            const coords = earthquake.geometry.coordinates;

            console.log(`${properties.time}`);
            console.log('==============================');
            console.log(`M ${properties.mag} - ${properties.place}`);
            console.log(`${properties.time}`);
            console.log(`Magnitud: ${properties.mag}`);
            console.log(`Estatus: ${properties.status}`);
            console.log(`Tipo: ${properties.type}`);
            console.log(`Lugar: ${properties.place}`);
            console.log(`Coordenadas: ${coords[0]} , ${coords[1]}`);
            console.log(`Info: ${properties.url}`);
            console.log(`Detalles: ${properties.detail}`);
            console.log('==============================');
        });
    });
}).on('error', (error) => {
    console.error(`Error al obtener los datos: ${error.message}`);
});
