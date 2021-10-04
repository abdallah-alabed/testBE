'use strict'
const {myFruitModel}=require("../models/Fruit.model");



let fruitController= (req,res)=>{
    myFruitModel.find({}).then(e=>{res.json(e)})
}

let fruitAddController= async (req,res)=>{
    let { name , image ,  price } =req.body;

    let newFruit=new myFruitModel({
        name:name,
        image:image,
        price:price
    })
    newFruit.save();

    let fruitList=myFruitModel.find({});

    res.status(201).json(fruitList)
}

let fruitDeleteController=(req,res)=>{
    let id=req.params.id;
    myFruitModel.findByIdAndDelete(id, async(error)=>{

if(error){
    res.status(500).send('error')
} else {
    let fruitList= await  myFruitModel.find({});

    res.json(fruitList)
}
    })
}

let fruitUpdateController= async (req,res)=>{
    let id=req.params.id;

   let{name,price}=req.body;
   
   myFruitModel.findOne({_id:id}).then((e)=>{
       e.name=name;
       e.price=price;
       
       e.save();
   })
   let fruitList= await myFruitModel.find({});
   res.status(200).send(fruitList)
}



module.exports={
    fruitController,
    fruitAddController,
    fruitDeleteController,
    fruitUpdateController
}