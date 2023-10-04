'use strict'

var mongoose = require ('mongoose')
var Schema = mongoose.Schema

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: String,
    lang: [String]
})

module.expots = mongoose.model('Projects', ProjectSchema)
