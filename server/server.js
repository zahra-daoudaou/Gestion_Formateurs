const express = require('express');
const app = express();
const cors = require('cors');
const Formateur = require('./formateurModel');
const mongoose = require('mongoose');

const url = 'mongodb+srv://zhr:123456admin@db.yiypaxe.mongodb.net/GestionFormateur?retryWrites=true&w=majority&appName=DB';

//middleware and CORS
app.use(cors());
app.use(express.json())

//body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//fetch all formateurs!
app.get('/formateurs', async (req, res) => {
    try {
        const formateurs = await Formateur.find({})
        res.status(200).json(formateurs);
    } catch (error) {
        res.status(500).json(error)
    }
})

//search a formateur with id!
app.get('/formateurs_id/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const formateur = await Formateur.findById(id)
        res.status(200).json(formateur);
    } catch (error) {
        res.status(500).json(error)
    }
})

//add formateur!
app.post('/add_formateurs', async (req, res) => {
    try {
        const formateur = await Formateur.create(req.body)
        res.status(200).json(formateur);
    } catch (error) {
        res.status(500).json(error)
    }
})

//search a formateur with Nom and Prenom!
app.get('/formateurs_nom_prenom/:nom/:prenom', async (req, res) => {
    try {
        const { nom } = req.params;
        const { prnom } = req.params;
        const formateur = await Formateur.findOne({ nom: nom }, { prnom: prnom })
        res.status(200).json(formateur);
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete a formateur with Id
app.delete('/formateurs_id/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const formateur = await Formateur.findByIdAndDelete(id);
        if (!formateur) {
            return res.status(404).json({ 'There is No Formateur with the Id: ': id })
        }
        res.status(200).json({ message: 'Deleted', formateur })
    } catch (error) {
        res.status(500).json(error)
    }
})

//connection!
mongoose.set('strictQuery', false)
mongoose.connect(url).then(() => {
    app.listen(5000, () => {
        console.log('Gestion Formateur is Connected and working on Port 5000!')
    })
}).catch((error) => {
    console.log(error)
})
