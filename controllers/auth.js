const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response ) => {

    const { email, password } = req.body;

    res.status(201).json({
        ok: true,
        msg: 'registro',
        email,
        password
    })
}

const loginUsuario = (req, res = response ) => {

    const { email, password } = req.body;

    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}


const revalidarToken = (req, res = response ) => {

    res.json({
        ok: true,
        msg: 'renew token'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}