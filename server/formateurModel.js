const mongoose = require('mongoose')
const FormateurSchema = new mongoose.Schema(
    {
        matricule: {
            type: Number,
            required: true,
            unique: true
        },
        prenom: {
            type: String,
            required: true
        },
        nom: {
            type: String,
            required: true
        },
        telephone: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        echelle: {
            type: Number,
            required: true
        }
    }
)
const Formateur = mongoose.model('Formateur', FormateurSchema);
module.exports = Formateur;