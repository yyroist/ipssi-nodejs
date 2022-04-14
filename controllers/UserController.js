
/**
 * Controller User.
 * 
 * Gestion du CRUD Utilisateur.
 */
const User = require('../models/User') // Chargement du model User
module.exports = {

    /**
     * Chargement de la liste des utilisateurs.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    index: (req, res) => {
        User.find({}, (err, users) => {
            return res.status(200).render('users/index', {users})
        })
    }, 

    /**
     * Chargement d'une fiche utilisateur via un ID en paramètre.
     * @param {*} req 
     * @param {*} res 
     */
    show: (req, res) => {
        User.findOne({_id: req.params.id}, (err, user) => {
            if (err) {
                return res.status(404).render('errors/404')
            }
            return res.status(200).render('users/show', {user})
        })
    },

    /**
     * Chargement de l'interface de création d'utilisateur.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    new: (req, res) => res.status(200).render('users/new'),

    /**
     * Sauvegarde d'un nouvel utilisateur en base.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create: (req, res) => {
        // Création de l'objet à insérer en base
        let user = new User(req.body)
        user.save()

        return res.redirect('/users')
    }, 

    /**
     * Edition d'utilisateur.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    edit: (req, res) => {
        User.findOneAndUpdate({_id: req.params.id}, req.body, err => {
            if (err) {
                return res.status(500).render('errors/internal', {
                    code: 500,
                    message: 'Erreur lors de la mise à jour de l\'utilisateur.'
                })
            }

            return res.redirect('/users')
        })
    },

    /**
     * Suppression d'un utilisateur.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete: (req, res) => {
        User.findOneAndRemove({_id: req.params.id}, err => {
            if (err) {
                return res.status(500).render('errors/internal', {
                    code: 500,
                    message: 'Erreur lors de la suppression de l\'utilisateur.'
                })
            }

            return res.redirect('/users')
        })
    }
}