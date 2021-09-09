const model = require('../models/video.model')

const read = async (req, res) => {
    // Fetch stored videos and sort them
    try {
        const videos = await model.find()
            .sort({ publishedAt: -1 }) // Sort in reverse chronological order
            // Use limit and skip to implement pagination
            .limit(req.query.limit ? parseInt(req.query.limit) : 10) // Limit results to the specified number
            .skip(parseInt(req.query.skip)) // Skip the specified number of results
        res.send(videos)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports.read = read

const search = async (req, res) => {
    if(!req.query.q) {
        return res.status(404).send({})
    }
    try {
        const videos = await model.find({ $text: { $search: req.query.q } }) // Search on name and description indexes
        res.send(videos)
    } catch (e) {
        return res.status(404)
    }
}

module.exports.search = search