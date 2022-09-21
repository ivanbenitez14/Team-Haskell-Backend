const express = require('express');
require('dotenv').config();


// Creacion del servidor de Express

const app = express();


// Directorio publico
app.use( express.static('public') );


// Lectura y parseo del body
app.use( express.json() );


// Rutas
app.use('/api/auth', require('./routes/auth') );




// Puerto donde se escuchan las peticiones

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
