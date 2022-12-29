let db = require("../database/models")
const { validationResult } = require('express-validator' );
const API = 'http://www.omdbapi.com/?apikey=b73b6124&s=';
const moviesController = {
    index: function(req, res) {
      
        db.Peliculas.findAll({
          include: [{association: "generos"},{association: "actores"}]
        })
              .then(function(peliculas){
                res.render('movies', {peliculas: peliculas});
              })
    },
    detail: function(req, res, next) {
      
        db.Peliculas.findByPk(req.params.id, {
          include: [{association: "generos"},{association: "actores"}]
        })
              .then(function(pelicula){
                res.render('movie-detail', {Pelicula: pelicula});
              })
        },
    
    create: (req, res) =>{
        db.genero.findAll()
            .then (function(generos){
                return res.render("listadoPeliculas", {generos:generos});
            })
    }
}

module.exports = moviesController;