const { Schema, model } = require('mongoose');

const InfoSchema = Schema({
    
    photo: {
        type: String,
    },
    name: {
        type: String,
    },
    biography: {
        type: String,
    },
    cellphone: {
        type: String,
    }

});

module.exports = model('Info', UsuarioSchema );