"use strict";
const mongoose = require ('mongoose');

let fruitSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: String,
});

let myFruitModel = mongoose.model('fruit',fruitSchema);

module.exports={ myFruitModel }