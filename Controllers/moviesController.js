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
    updateForm: function(req, res, next) {
    
      db.Peliculas.findByPk(req.params.id)
            .then(function(pelicula){
              console.log(pelicula.title)
              res.render('movie-edit-form', {pelicula: pelicula});
            })},

    update: function(req, res, next) {

      let errors = validationResult(req);
      console.log(errors)
      if (errors.isEmpty()) {
      db.Peliculas.update({
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length
      },{
      where: {
        id: req.params.id
      }
    }
    )
  }else{
    db.Peliculas.findByPk(req.params.id)
    .then(function(pelicula){
      res.render('movie-edit-form', {pelicula: pelicula, errors: errors.mapped(), old: req.body})})
    }
    res.redirect('/')

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