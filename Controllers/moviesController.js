let db = require("../database/models")
const moviesController = {
    index: (req, res) => {
        res.send("Géneros desde el Controller")
    },
    detail: (req, res) => {
        res.send("Detalle desde el Controller")
    },
    create: (req, res) =>{
        db.genero.findAll()
            .then (function(generos){
                return res.render("listadoPeliculas", {generos:generos});
            })
    }
}

module.exports = moviesController;