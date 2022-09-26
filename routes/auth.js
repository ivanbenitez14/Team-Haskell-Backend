/* 
    Rutas de usuarios (Auth) 
    host + /api/auth
*/


const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken, actualizarUserInformation } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validacionDeCampos');
const { validarJWT } = require('../middlewares/validacionJwt');


const router = Router();


router.post(
    '/new',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe ser superior a 8 caracteres').isLength({ min: 8 }),
        check('password', 'La contraseña debe ser alfanumerica').not().isAlpha(),
        check('password', 'La contraseña debe ser alfanumerica').not().isNumeric(),
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



router.get('/renew', validarJWT, revalidarToken );




// ACTUALIZAR INFO DE USUARIO
router.put('/:_id', actualizarUserInformation );




// BORRAR INFO DE USUARIO
//router.delete('/:id', eliminarInfo );






module.exports = router;