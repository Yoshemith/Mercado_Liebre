//Requiere express
const express = require('express');

//Requerir path
const path = require('path');

//Ejecutar express
const app = express();

//Usando recursos estaticos
app.use(express.static('public'));

/*
 ** RUTAS A LOS RECURSOS **
*/

//Ruta /index
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
});

//Levanta el servidor de Express
app.listen(3030,() => console.log('Server running at port 3030'));