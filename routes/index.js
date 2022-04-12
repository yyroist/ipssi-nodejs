const express = require('express')

const HomeController = require('../controllers/HomeController')
const UserController = require('../controllers/UserController')

exports.router = (() => {
    const router = express.Router()

    // Page d'accueil
    router.route('/').get(HomeController.index)
    
    // CRUD Utilisateurs
    router.route('/users').get(UserController.index)
    router.route('/users/create').get(UserController.new)
    router.route('/users/create').post(UserController.create)
    router.route('/user/:id').get(UserController.show)
    router.route('/user/:id/delete').get(UserController.delete)
    router.route('/user/:id/edit').post(UserController.edit)

    return router
})()