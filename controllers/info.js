const { response } = require('express');


const infoUsuario = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'Actualizar Informacion'
    })

}

module.exports = {
    infoUsuario,
}