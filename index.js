const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

// Dependencias para Github login 
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const session = require('express-session');
const Usuario = require('./models/Usuario');
const passportSetup = require('./passport')
const cookieSession = require('cookie-session')
// Creacion del servidor de Express
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

// Github login
app.use(passport.initialize());
app.use(passport.session())


//app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));


// DB
dbConnection();


// CORS para proteccion de rutas
app.use(cors());


// Directorio publico
app.use( express.static('public') );


// Lectura y parseo del body
app.use( express.json() );


// Rutas
app.use('/api/auth', require('./routes/auth') );

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/index.html');
})


// Puerto donde se escuchan las peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});








