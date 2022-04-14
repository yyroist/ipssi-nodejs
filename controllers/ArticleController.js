
/**
 * Controller Article.
 * 
 * Gestion du CRUD Article.
 */
const Article = require('../models/Article') // Chargement du model Article
const User = require('../models/User') // Chargement du model User
module.exports = {

    /**
     * Chargement de la liste des articles.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    index: async(req, res) => {
        let articles = await Article.find({}).populate('user')
        console.log(articles)
        return res.status(200).render('articles/index', {articles})
    }, 

    /**
     * Chargement d'un article via un ID en paramètre.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    show: async(req, res) => {
        let article = await Article.findOne({_id: req.params.id}).populate('user')
        return res.status(200).render('articles/show', {article})
    },

    /**
     * Chargement de l'interface de création d'utilisateur.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    new: (req, res) => {
        User.find({}, (err, users) => res.status(200).render('articles/new', {users}))
    },

    /**
     * Sauvegarde d'un nouvel article en base.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create: (req, res) => {
        // Création de l'objet à insérer en base
        let article = new Article(req.body)
        article.save()

        return res.redirect('/')
    }, 

    /**
     * Chargement de l'interface d'édition d'article.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    edit: async(req, res) => {
        let users = await User.find({})
        let article = await Article.findOne({_id: req.params.id}).populate('user')

        return res.status(200).render('articles/edit', {article, users})
    },

    /**
     * Mise à jour d'article.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    update: (req, res) => {
        Article.findOneAndUpdate({_id: req.params.id}, req.body, err => {
            if (err) {
                return res.status(500).render('errors/internal', {
                    code: 500,
                    message: 'Erreur lors de la mise à jour de l\'article.'
                })
            }

            return res.redirect('/')
        })
    },

    /**
     * Suppression d'un article.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete: (req, res) => {
        Article.findOneAndRemove({_id: req.params.id}, err => {
            if (err) {
                return res.status(500).render('errors/internal', {
                    code: 500,
                    message: 'Erreur lors de la suppression de l\'article.'
                })
            }

            return res.redirect('/')
        })
    }
}