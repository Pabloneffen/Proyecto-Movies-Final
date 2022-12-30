var path = require('path');
var express = require("express");
var cookieParser = require('cookie-parser');
var app = express();
var bodyParser = require('body-parser');

app.listen(3000, ()=>{console.log("Servidor corriendo puerto 3000")});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var genresRouter = require("./routes/genres");
var moviesRouter = require("./routes/movies");
var usersRouter = require('./routes/users')

app.all('/',function(req, res){
    res.redirect('/movies');
  })
app.use("/genres", genresRouter);
app.use("/movies", moviesRouter);
app.use('/users', usersRouter);

app.use(express.json());

module.exports = app;
