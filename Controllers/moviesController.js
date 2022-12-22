const moviesController = {
    index: (req, res) => {
        res.send("Movies desde el Controller")
    },
    detail: (req, res) => {
        res.send("Movies detail desde el Controller")
}
}

module.exports = moviesController;