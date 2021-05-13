const express = require("express");
const router = express.Router();

router.get('/', ( req, res ) => {
    res.render("index", { titulo : "Mi titulo dinamico"})
}) 

router.get('/servicios', ( req, res ) => {
    res.render("index", { titulo : "Mensaje dinamico"})
}) 

router.get('/agregarMascota', (req, res) => {
    res.render('agregarMascota',{titulo: 'Agregar mascota'})
})

router.get('/informacion', (req, res) => {
    res.render('informacion',{titulo: 'Servicios'})
})

// router.post('/agregarMascota', async (req, res) => {
//     console.log("se envio")
//     const body = req.body
//     console.log(body)
// })

module.exports = router;