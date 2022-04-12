/**
 * Model USER.
 * 
 * Gestion des collections utilisateurs.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Configuration du Schema
let UserSchema = new Schema({
    lastname: {type: String, required: true}, 
    firstname: {type: String, required: true},
    age: {type: Number}
})

// Export
module.exports = mongoose.model('User', UserSchema)
