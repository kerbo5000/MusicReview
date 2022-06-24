const express = require('express')
const router = express.Router()
const {getSpotifyId} = require('../controllers/spotifyController')

router.get('/:type/:search',getSpotifyId)
module.exports = router
