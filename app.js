const express = require("express");
const app = express();

app.listen(3000, ()=>{console.log("Servidor corriendo puerto 3000")});

app.set("view engine", "ejs");

const genresRouter = require("./routes/genres");
const moviesRouter = require("./routes/movies");

app.use("/genres", genresRouter);
app.use("/movies", moviesRouter);


