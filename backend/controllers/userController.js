const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const getAllUser = asyncHandler(async (req,res) => {
  const users = await User.find({})
  res.status(200).json(users)
})
const getUserById = asyncHandler(async (req,res) => {
  const {id} = req.params
  const user = await User.findById(id)
  res.status(200).json({...user,token:generateToken(user.id)})
})
const registerUser = asyncHandler(async (req,res) => {
  const {name,email,password} = req.body
  if(!name||!email||!password){
    res.status(400)
    throw new Error('missing inputs')
  }
  const user = await User.findOne({$or:[{email},{name}]})
  if(user){
    res.status(400)
    throw new Error('user exists')
  }
  const salt = await bcrypt.genSalt(10)
  const hashedPwd = await bcrypt.hash(password,salt)
  const newUser = await User.create({
    name,
    email,
    password: hashedPwd
  })
  if(newUser){
    res.status(200).json({
      id:newUser.id,
      name:newUser.name,
      email:newUser.email,
      message:"registered",
      token:generateToken(newUser.id)
    })
  }
})

const loginUser = asyncHandler(async (req,res) => {
  const {email,password} = req.body
  if(!email||!password){
    res.status(400)
    throw new Error('missing inputs')
  }
  const user = await User.findOne({email})
  if(!user){
    res.status(400)
    throw new Error('user doesn\'t exists')
  }
  const match = await bcrypt.compare(password,user.password)
  if(match){
    res.status(200).json({
      id:user.id,
      name:user.name,
      email:user.email,
      message:"logged in",
      token:generateToken(user.id)
    })
  }else{
    res.status(400)
    throw new Error('wrong password')
  }
})


const generateToken = (id)=> {
  return jwt.sign({id},process.env.JWT_SECRET, {expiresIn:"30d"})
}
module.exports = {
  registerUser,
  loginUser,
  getAllUser,
  getUserById
}
