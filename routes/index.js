const express = require('express')

const HomeController = require('../controllers/HomeController')
const UserController = require('../controllers/UserController')

exports.router = (() => {
    const router = express.Router()

    router.route('/').get(HomeController.index)
    
    router.route('/users').get(UserController.index)
    router.route('/user/:id').get(UserController.show)

    return router
})()