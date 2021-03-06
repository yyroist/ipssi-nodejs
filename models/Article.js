/**
 * Model ARTICLE.
 * 
 * Gestion des collections articles.
 */
 const {Schema, model} = require('mongoose')

 // Configuration du Schema
 let ArticleSchema = new Schema({
    title: {
        type: String, 
        required: true
    }, 
    description: {
        type: String, 
        required: true
    },
    photo: {
        type: String,
        default: 'https://picsum.photos/1280/780'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
 })
 
 // Export
 module.exports = model('Article', ArticleSchema)