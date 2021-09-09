const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {type: String, index: true},
    description: {type: String, index: true},
    publishedAt: Date,
    thumbnails: Array
})

const Video = mongoose.model("Video", schema)

module.exports = Video