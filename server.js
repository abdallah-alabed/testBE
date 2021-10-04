'use strict'
const express= require("express");
const cors= require("cors");
require('dotenv').config();
const mongoose = require ('mongoose');
const app=express();
app.use(cors());
app.use(express.json());
const PORT= process.env.PORT;
const {handleFruit}=require('./controllers/API.controller')
const ATLAS= process.env.ATLAS;
const {
    fruitController,
    fruitAddController,
    fruitDeleteController,
    fruitUpdateController
}= require('./controllers/Fruit.controller')


mongoose.connect(`${ATLAS}`,{ useNewUrlParser: true,useUnifiedTopology: true});

app.get('/getFruit',handleFruit);

app.get('/fruit', fruitController)
app.post('/addFruit',fruitAddController)
app.put('/updateFruit/:id',fruitUpdateController)
app.delete('/deletFruit/:id',fruitDeleteController)

app.listen(PORT,()=>{
    console.log(`we are on Port: ${PORT}`)
})