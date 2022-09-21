const express = require('express');


// Creacion del servidor de Express

const app = express();


// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true
    })
});


// Puerto donde se escuchan las peticiones

app.listen( 4000, () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`);
});
