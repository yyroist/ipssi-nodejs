
// Chargement de la liste des utilisateurs
const users = require('../data/users.json')

module.exports = {

    /**
     * Chargement de la liste des utilisateurs.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    index: (req, res) => {
        // return res.status(200).json(users) // API JSON return method
        return res.status(200).render('users/index', {users}) // Rendering view
    }, 

    /**
     * Chargement d'une fiche utilisateur via un ID en paramètre.
     * @param {*} req 
     * @param {*} res 
     */
    show:  (req, res) => {
        // Initialisation des variables
        let userId = Number.parseInt(req.params.id) || null,
            user = null

        if (null === userId) {
            // Renvoie une 404 si l'id est manquant dans l'URI
            return res.status(404).render('404')
        } else {

            // Renvoie une 404 si l'id ne correspond à aucun utilisateur
            user = users.find(u => userId === u.id)
            if (null === user || user === undefined) {
                return res.status(404).render('404')
            } 

            // Chargement de la vue
            return res.status(200).render('users/show', {user})
        }
    }
}