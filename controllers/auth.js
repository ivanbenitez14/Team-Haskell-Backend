const { response } = require('express');
const Usuario = require('../models/Usuario');

const crearUsuario = async(req, res = response ) => {

    try {
        const usuario = new Usuario( req.body );

        await usuario.save();
    
        res.status(201).json({
            ok: true,
            msg: 'registro',
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor contacte al administrador'
        })
    }


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