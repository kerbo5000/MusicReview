const mongoose  = require('mongoose')
const musicSchema = mongoose.Schema({
  name:{
    type:String,
    required: true
  },
  artist:{
    type:String,
    required: true
  },
  type:{
    type:String,
    enum:['song','album'],
    required:true
  },
  spotifyId: {
    type: String,
    required: true,
  },
})
const music = mongoose.model('Music',musicSchema)
const reviewSchema = mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:'User'
  },
  music: {
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:'Music'
  },
  likes:{
    type:Number,
    default:0
  }
},{
  timestamps:true
})
const review = mongoose.model('Review',reviewSchema)
module.exports = {review,music}
