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
//Ruta /register
app.get('/register', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'));
});
//Ruta /login
app.get('/login', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'));
});
//validacion pass
app.get('/validation.js', (req, res) => {
    res.sendFile(path.resolve('./validation.js'));
});
//Levanta el servidor de Express
app.listen(3030,() => console.log('Server running at port 3030'));