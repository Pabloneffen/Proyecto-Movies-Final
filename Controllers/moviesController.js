let db = require("../database/models");
const { validationResult } = require('express-validator' );

const moviesController = {
    index: function(req, res) {
      
        db.Peliculas.findAll({
          where: {
            deleted: 0
          }
        },{
          include: [{association: "generos"},{association: "actores"}]
        })
              .then(function(peliculas){
                res.render('movies', {peliculas: peliculas});
              })
    },
    createForm: function(req, res, next) {
      console.log(req.cookies.esAdmin)
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
      
    updateForm: function(req, res, next) {
      if(req.cookies.esAdmin!=0){
      db.Peliculas.findByPk(req.params.id)
            .then(function(pelicula){
              console.log(pelicula.title)
              res.render('movie-edit-form', {pelicula: pelicula});
            })}else{res.redirect('/')}},

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
      
    deleteConfirmation: function(req, res, next){
      if(req.cookies.esAdmin!=0){  
      db.Peliculas.findByPk(req.params.id)
        .then(function(pelicula){
        res.render('movie-delete', {pelicula: pelicula})})
}else{res.redirect('/')}},
      

      delete: function(req, res, next){

        
        db.Peliculas.update({
          deleted : 1
        },{
        where: {
          id: req.params.id
        }
        }).then(()=>{
          return res.redirect('/movies')})
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