const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    biography: {
        type: String,
        required: false
    },
    cellphone: {
        type: String,
        required: false
    }

});




module.exports = model('Usuario', UsuarioSchema );