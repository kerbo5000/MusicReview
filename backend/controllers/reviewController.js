const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const {review:Review} = require('../models/reviewModel')

const getUserReview = asyncHandler(async (req,res) => {
  const reviews = await Review.find({user:req.user.id})
  res.status(200).json({
                        message:"success",
                        data:reviews
                      })
})

const getReviewsByUser = asyncHandler(async (req,res) => {
  const {name:username} = req.params
  const reviews = await Review.find({'user.name':username})
  res.status(200).json({
                        message:"success",
                        data:reviews
                      })
})
const addReview = asyncHandler(async (req,res) => {
  const {title,body,name,type,artist} = req.body
  
})
module.exports = {getUserReview}
// module.exports = {
//   getUserReview,
//   getReviewsByUser,
//   getReviewsByArtist,
//   getReviewsByAlbum,
//   getReviewsBySong,
//   addReview,
//   updateReview,
//   deleteReview,
//   increaseLikes
// }
