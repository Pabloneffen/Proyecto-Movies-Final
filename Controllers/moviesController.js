let db = require("../database/models")
const moviesController = {
    index: function(req, res) {
      
        db.Peliculas.findAll({
          include: [{association: "generos"},{association: "actores"}]
        })
              .then(function(peliculas){
                res.render('movies', {peliculas: peliculas});
              })
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