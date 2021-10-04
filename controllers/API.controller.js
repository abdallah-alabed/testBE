'use strict'
const fruitModel = require('../models/API.model')
const axios=require('axios')


let handleFruit= async (req,res)=>{
    let response= await axios.get(`https://fruit-api-301.herokuapp.com/getFruit`);
    let Data=response.data;

    res.status(200).json(Data)
}

module.exports={ handleFruit }