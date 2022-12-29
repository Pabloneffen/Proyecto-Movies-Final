const path = require('path');
const express = require("express");
const app = express();

app.listen(3000, ()=>{console.log("Servidor corriendo puerto 3000")});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, 'views'));

const genresRouter = require("./routes/genres");
const moviesRouter = require("./routes/movies");

app.all('/',function(req, res){
    res.redirect('/movies');
  })
app.use("/genres", genresRouter);
app.use("/movies", moviesRouter);

app.use(express.json());

module.exports = app;
