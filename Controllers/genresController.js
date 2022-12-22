const genresController = {
    index: (req, res) => {
        res.send("Géneros desde el Controller")
    },
    detail: (req, res) => {
        res.send("Detalle desde el Controller")
}
}

module.exports = genresController;
