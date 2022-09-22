const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const crearUsuario = async(req, res = response ) => {

    const { email, password } = req.body;

    try {
        // Si encuentra un usuario registrado con el parametro muestra el error
        let usuario = await Usuario.findOne({ email });

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario registrado con ese email'
            });
        }

        // Si no encuentra usuarios registrados con ese parametro lo registra
        usuario = new Usuario( req.body );

        // Encriptacion de contraseña 
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );

        // Guardado de usuario en DB
        await usuario.save();
    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            email: usuario.email
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