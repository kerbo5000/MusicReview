const asyncHandler = require('express-async-handler')
const axios = require('axios')

const getSpotifyId = asyncHandler(async (req,res) => {
  const {search,type} = req.params
  const axios = require("axios");
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/search/',
    params: {
      q:search ,
      type: type,
      offset: '0',
      limit: '10',
      numberOfTopResults: '5'
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    const results = response.data[type]["items"];
    const id = results.filter((item)=>{
      
    })
  }).catch(function (error) {
  	console.error(error);
  });
})
