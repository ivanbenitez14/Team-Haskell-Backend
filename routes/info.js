/*
    EVENT ROUTES
    /api/info
*/


const { Router } = require("express");
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken, actualizarUserInformation } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validacionDeCampos');
const { validarJWT } = require('../middlewares/validacionJwt');


const router = Router();

// CREAR UN NUEVO EVENTO
router.post(
    '/',
    [

    ], 
    crearEvento 
);


// ACTUALIZAR EVENTO
router.put(
    '/:id',
    validarCampos, 
    actualizarEvento 
);


// BORRAR EVENTO
router.delete(
    '/:id',
    validarCampos, 
    eliminarEvento 
);




module.exports= router;