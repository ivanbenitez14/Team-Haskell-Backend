const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');


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

        // JWT
        const token = await generarJWT( usuario.id, usuario.email );
    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            email: usuario.email,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor contacte al administrador'
        });
    }


}

const loginUsuario = async(req, res = response ) => {

    const { email, password } = req.body;

    try {
        
        // Si no encuentra un usuario registrado con el parametro muestra el error
        const usuario = await Usuario.findOne({ email });

        if ( !usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe un usuario registrado con ese email'
            });
        }

        // Match de passwords
        const validPassword = bcrypt.compareSync( password, usuario.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        // JWT
        const token = await generarJWT( usuario.id, usuario.email );

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            email: usuario.email,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor contacte al administrador'
        })
    }

}

const loginWithGithub = (req, res = response ) => {

    res.json({
        ok: true,
        msg: 'github'
    })
}


const revalidarToken = async(req, res = response ) => {

    const { uid, email } = req;

    const token = await generarJWT( uid, email )

    res.json({
        ok: true,
        token
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    loginWithGithub
}