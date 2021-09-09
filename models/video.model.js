const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: String,
    description: String,
    publishedAt: Date,
    thumbnails: Array
})

schema.index({name: 'text', description: 'text'}) // Index name and description fields to allow performing search

const Video = mongoose.model("Video", schema)

module.exports = Video