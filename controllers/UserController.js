
/**
 * Controller User.
 * 
 * Gestion du CRUD Utilisateur.
 */
const User = require('../models/user') // Chargement du model User
module.exports = {

    /**
     * Chargement de la liste des utilisateurs.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    index: (req, res) => {
        User.find({}, (err, users) => {
            return res.render('users/index', {users})
        })
    }, 

    /**
     * Chargement d'une fiche utilisateur via un ID en paramètre.
     * @param {*} req 
     * @param {*} res 
     */
    show:  (req, res) => {
        User.findOne({id: req.params.id}, (err, user) => {
            if (err) {
                return res.status(404).render(404)
            }
            return res.render('users/show', {user})
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
    }
}