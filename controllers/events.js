const { response } = require('express');

const getInfo = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'getInfo'
    })
}

const guardarInfo = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'guardarInfo'
    })
}

const actualizarInfo = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'actualizarInfo'
    })
}

const eliminarInfo = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'eliminarInfo'
    })
}

module.exports = {
    getInfo,
    guardarInfo,
    actualizarInfo,
    eliminarInfo
}