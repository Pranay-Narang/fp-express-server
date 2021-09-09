const router = require("express").Router()

const controller = require("../controllers/video.controller")

router.get('/videos', controller.read)
router.get('/videos/search', controller.search)

module.exports = router