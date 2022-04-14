const express = require('express')

const HomeController = require('../controllers/HomeController')
const UserController = require('../controllers/UserController')
const ArticleController = require('../controllers/ArticleController')

exports.router = (() => {
    const router = express.Router()

    // Page d'accueil
    router.route('/').get(HomeController.index)
    
    // CRUD Utilisateurs
    router.route('/users').get(UserController.index)
    router.route('/user/create').get(UserController.new)
    router.route('/user/create').post(UserController.create)
    router.route('/user/:id').get(UserController.show)
    router.route('/user/:id/delete').get(UserController.delete)
    router.route('/user/:id/edit').post(UserController.edit)

    // CRUD Articles
    router.route('/articles').get(ArticleController.index)
    router.route('/article/create').get(ArticleController.new)
    router.route('/article/create').post(ArticleController.create)
    router.route('/article/:id').get(ArticleController.show)
    router.route('/article/:id/delete').get(ArticleController.delete)
    router.route('/article/:id/edit').get(ArticleController.edit)
    router.route('/article/:id/update').post(ArticleController.update)

    return router
})()