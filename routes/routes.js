const express =require ('express');
const Model= require('../models/models');
const router =express.Router();

//GET ALL API

router.get('/getAll', async (req,res)=>{
    try{
        const data = await Model.find()
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error})
    }
})


//GET By ID Method
router.get('/getOne/:id',async(req,res)=>{
    try{
        const data = await Model.findById(req.params.id)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error})
    }
})

//POST Method

router.post('/post',async(req,res)=>{
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })    
    try{
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/patch/:id',async(req,res)=>{
    try {
        const id= req.params.id;
        const dataToUpdate=req.body
        const options={new:true}

        const result= await Model.findByIdAndUpdate(
            id,dataToUpdate,options
        )
        res.send(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//DELETE by ID Method
router.delete('/delete/:id',async(req,res)=>{
    try{
        const id =req.params.id;
        const data= await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted`)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports =router;
