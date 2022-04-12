module.exports = {
    
    /**
     * Chargement de la page d'accueil.
     * @param {*} req 
     * @param {*} res 
     */
    index: (req, res) => res.status(200).render('index', {user})
}