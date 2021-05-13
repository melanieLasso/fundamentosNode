const express = require('express');
const fileUpload = require('express-fileupload')
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(fileUpload())

require('dotenv').config()

const puerto = process.env.PORT || 3000;

//Conexión base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@sandbox.9isnz.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Base de datos conectada...')) 
  .catch(e => console.log('Error de conexión', e))

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + '/public'));

//Rutas
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
    res.status(400).render("404", {
        titulo: "400",
        descripcion: "Titulo del sitio web"
    })
})

app.listen(puerto, () => {
    console.log("Escuchando en el puerto...  ", puerto)
})