module.exports = (app) => {
    app.get('/check', (req, res) => {
        res.send("server connected!")
    })
}