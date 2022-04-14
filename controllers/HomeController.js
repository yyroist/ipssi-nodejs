
/**
 * Controller Home.
 * 
 * Gestion de la page d'accueil.
 */

const Article = require('../models/Article') // Chargement du model Article
module.exports = {
    
    /**
     * Chargement de la page d'accueil.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    index: async(req, res) => {
        let articles = await Article.find({}).populate('user')
        return res.status(200).render('index', {articles})
    }
}