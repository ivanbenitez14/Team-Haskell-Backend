/* 
    Rutas de usuarios (Auth) 
    host + /api/auth
*/


const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validacionDeCampos');

const router = Router();


router.post(
    '/new',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe ser superior a 8 caracteres').isLength({ min: 8 }),
        check('password', 'La contraseña debe ser alfanumerica y sin numeros consecutivos').isAlphanumeric(),
        validarCampos
    ],
    crearUsuario 
);



router.post(
    '/', 
    [
        check('email', 'Debe proporcionar un email').isEmail(),
        check('password', 'Debe proporcionar una contraseña valida').isLength({ min: 8 }),
        validarCampos
    ],
    loginUsuario 
);



router.get('/renew', revalidarToken );









module.exports = router;