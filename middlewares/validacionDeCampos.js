const { response } = require('express');
const { validationResult } = require('express-validator');


const validarCampos = ( req, res = response, next) => {


    // Funcion para manejar los errores en el formulario
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
    // Callback para que siga a la siguiente validacion
    next();

}

module.exports = {
    validarCampos
}