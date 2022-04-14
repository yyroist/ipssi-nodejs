
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
        // Récupération de la liste des articles à afficher
        let articles = await Article.find({}, err => {
            if (err) {
                return res.status(500).render('errors/internal', {
                    code: 500,
                    message: 'Erreur lors de la récupération des articles.'
                })
            }
        })
        .populate('user')
        
        return res.status(200).render('index', {articles})
    }
}