const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')

router.get('/', async (req, res) => {
    
    try {
        
        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)

        res.render("mascotas", {
            arrayMascotas: arrayMascotasDB
        })

    } catch (error) {
        console.log(error)
    }
    
})

router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/', async (req, res) => {
    const body = req.body
    try {

        //Otra forma de realizarlo
        // const mascotaDB = new Mascota(body)
        // await mascotaDB.save()

        console.log(req.files)
        let subirImagen = req.files.imagen
        subirImagen.mv(`./public/${subirImagen.name}`,err => {
            console.log("imagen subida")
        })
        await Mascota.create(body)
        
        res.redirect('/mascotas')
        
        
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async (req,res) => {
    const _id = req.params.id

    try{
        const mascotaDB = await Mascota.findOne({_id})
        res.render('detalleMascota', {
            mascota: mascotaDB,
            error: false
        })
    }catch (error) {
        res.render('detalleMascota', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})

module.exports = router;