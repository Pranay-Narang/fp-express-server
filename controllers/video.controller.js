const model = require('../models/video.model')

const read = async (req, res) => {
    // Fetch stored videos and sort them
    try {
        const videos = await model.find()
            .sort({ publishedAt: -1 }) // Sort in reverse chronological order
            // Use limit and skip to implement pagination
            .limit(parseInt(req.query.limit)) // Limit results to the specified number
            .skip(parseInt(req.query.skip)) // Skip the specified number of results
        res.send(videos)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports.read = read