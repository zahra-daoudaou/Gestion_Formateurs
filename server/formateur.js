const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')

const Formateur = require('./formateurModel')

const url = 'mongodb+srv://zhr:123456admin@db.yiypaxe.mongodb.net/GestionFormateur?retryWrites=true&w=majority&appName=DB';
const app = express()

//middleware
app.use(express.json())

//body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Formateur Route!
app.get('/', (req, res) => {
    res.send('Formateur Route is Working!')
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

//fetch all formateurs!
app.get('/formateurs', async (req, res) => {
    try {
        const formateurs = await Formateur.find({})
        res.status(200).json(formateurs);
    } catch (error) {
        res.status(500).json(error)
    }
})

//search a formateur with Matricule!
app.get('/formateurs_matricule/:matricule', async (req, res) => {
    try {
        const { matricule } = req.params;
        const formateur = await Formateur.findOne({ matricule })
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

//augmenter l’échelle d’un formateur!
app.put('/augmenter_echelle/:matricule', async (req, res) => {
    try {
        const { matricule } = req.params;

        //augmenter l'echelle par:1!!
        const formateur = await Formateur.findOneAndUpdate({ matricule }, { $inc: { echelle: 1 } }, { new: true });
        if (!formateur) {
            return res.status(404).json({ error: 'Formateur not found!' });
        }
        res.json({ message: 'Echelle increased by 1 successfully', formateur });
    } catch (error) {
        res.status(500).json(error);
    }
});

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

//delete a formateur by Id with thier Absences!
app.delete('/delete_formateur_absences/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const AbsenceRespose = await axios.get(`http://localhost:1971/absences_id_formateur/${id}`)
        const abcencesFormateur = AbsenceRespose.data

        if (!abcencesFormateur) {
            return res.status(404).json({ error: 'Absences not found!' })
        }
        res.json({ message: 'Formateur and its absences are deleted!' })
        
        for (const absence of abcencesFormateur) {
            await axios.delete(`http://localhost:1971/absences/${absence._id}`);
        }

        const formateur = await Formateur.findByIdAndDelete(id)
        if (!formateur) {
            return res.status(404).json({ error: 'Formateur not found!' })
        }

    } catch (error) {
        res.status(500).json(error)
    }
})

//get formateur whose scale is between two values given! 
app.get('/formateur_echelle/:echelle1/:echelle2', async (req, res) => {

    try {
      const echelle1 = req.params.echelle1;
      const echelle2 = req.params.echelle2;
  
      const formateurs = await Formateur.find({ echelle: { $gte: echelle1, $lte: echelle2 } })
  
      if (formateurs) {
        res.json({ formateurs: formateurs });
      } else {
        res.sendStatus(404);
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  });

//connection!
mongoose.set('strictQuery', false)
mongoose.connect(url).then(() => {
    app.listen(1997, () => {
        console.log('Gestion Formateur is Connected and working on Port 1997!')
    })
}).catch((error) => {
    console.log(error)
})

