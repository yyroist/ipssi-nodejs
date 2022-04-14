const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/index').router
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const mongoose = require('mongoose')
const { request } = require('express')
const DB_DSN = 'mongodb+srv://yyroist:2l9ysptnxv7Xb9dm@cluster0.iec4v.mongodb.net/ipssi-nodejs?retryWrites=true&w=majority'

mongoose.connect(DB_DSN, { useNewUrlParser: true , useUnifiedTopology: true })
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error: '))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

/** @documentation https://github.com/expressjs/method-override#custom-logic */
/**
 * Me permet d'utiliser un input hidden dans le Form avec la méthode voulue.
 * e.g. <input type="hidden" name="_method" value="put">
 */
app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        let method = req.body._method
        delete req.body._method
        return method
    }
}))

app.set('view engine', 'ejs')
app.use('', router)

// Gestion des erreurs 404
app.use(function(req, res, next) {
    res.status(404).render('errors/404');
});

app.listen(port, () => console.log(`Server listening to port ${port}`))