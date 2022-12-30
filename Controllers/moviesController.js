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
    createForm: function(req, res, next) {
      if(req.cookies.esAdmin!=0){
        res.render('movie-create-form')
      }else{res.redirect('/')}
    },

    create: function(req, res, next) {
      let errors = validationResult(req);
      if (errors.isEmpty()&&req.cookies.esAdmin!=0) {
      db.Peliculas.create({
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length
      })
      res.redirect('/')} else {
        console.log(errors)
        res.render('movie-create-form', {errors: errors.mapped(), old: req.body})
      }



  },
      

      detail: function(req, res, next) {
      
      db.Peliculas.findByPk(req.params.id, {
        include: [{association: "generos"},{association: "actores"}]
      })
            .then(function(pelicula){
              res.render('movies-detail', {pelicula: pelicula});
            })
      },
  
}

module.exports = moviesController;