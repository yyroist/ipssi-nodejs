const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/index').router

app.set('view engine', 'ejs')
app.use('', router)

// Gestion des erreurs 404
app.use(function(req, res, next) {
    res.status(404).render('404');
});

app.listen(port, () => console.log(`Server listening to port ${port}`))