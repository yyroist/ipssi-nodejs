/**
 * Model USER.
 * 
 * Gestion des collections utilisateurs.
 */
const {Schema, model} = require('mongoose')

// Configuration du Schema
let UserSchema = new Schema({
    lastname: {type: String, required: true}, 
    firstname: {type: String, required: true},
    age: {type: Number}
})

// Export
module.exports = model('User', UserSchema)
