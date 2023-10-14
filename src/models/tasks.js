const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    prioridad: {
        type: Number,
        required: true
    },
    notaadicional: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Tasks', userModel);