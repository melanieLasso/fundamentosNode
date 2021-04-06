const express = require('express');
const app = express();
const puerto = process.env.PORT || 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + '/public'));

// app.use((req, res, next) => {
//     res.status(400).render("404", {
//         titulo: "400",
//         descripcion: "Titulo del sitio web"
//     })
// })

app.get('/', (req, res) => {
    res.render('index', {titulo: 'Mi respuesta desde express'})
})

app.get('/informacion', (req, res) => {
    res.render('informacion',{titulo: 'Servicios'})
})

app.listen(puerto, () => {
    console.log("Escuchando en el puerto...  ", puerto)
})