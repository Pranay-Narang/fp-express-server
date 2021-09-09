const router = require("express").Router()

const controller = require("../controllers/video.controller")

router.get('/videos', controller.read)

module.exports = router