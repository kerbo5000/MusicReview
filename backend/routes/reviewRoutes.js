const express = require('express')
const router = express.Router()
// const {getUserReview,getReviewsByUser,getReviewsByArtist,getReviewsByAlbum,getReviewsBySong,addReview,updateReview,deleteReview,increaseLikes} = require('../controllers/reviewController')
const {getUserReview} = require('../controllers/reviewController')
const {protect} = require('../middleware/authMiddleware')

router.get('/',protect,getUserReview)
// router.get('/user/:name',getReviewsByUser)
// router.get('/artit/:name',getReviewsByArtist)
// router.get('/album/:name',getReviewsByAlbum)
// router.get('/song/:name',getReviewsBySong)
// router.post('/',protect,addReview)
// router.put('/likes/:id',protect,increaseLikes)
// router.put('/content/:id/',protect,updateReview)
// router.delete('/:id',protect,deleteReview)

module.exports = router
