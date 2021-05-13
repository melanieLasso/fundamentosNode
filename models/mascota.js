const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    id: String,
    nombre: String,
    edad: String,
    raza: String,
    descripcion: String,
    imagen: String
})

//Creacion del modelo

const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;