const todoSchema=require('../models/ToDo.js')

exports.createTODO=async (req,res)=>{
    const {title,description}=req.body;
    try {
        const data=await todoSchema.create({title:title,description:description});  
        res.status(200).json({message:data});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"intenral server error",});
    }   
}

exports.getTODO=async (req,res)=>{
    try {
        const data=await todoSchema.find();
        res.status(200).json({message:data})
    } catch (error) {
        console.log(error);
    }
}

exports.getOneTODO=async (req,res)=>{
    const {id}=req.params;
    try {
        const data=await todoSchema.findById(id);
        res.status(200).json({message:data})
    } catch (error) {
        console.log(error);
    }
}

exports.updateTODO=async (req,res)=>{
    const {id}=req.params;
    const body=req.body;
    try {
        const data=await todoSchema.findByIdAndUpdate({_id:id,body});
        if(!data) return res.status(404).json({message:"not found"});
        res.status(200).json({message:data})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"some error occured"})
    }
}

exports.deleteTODO=async (req,res)=>{
    const {id}=req.params;
    try {
        const data=await todoSchema.findByIdAndDelete({_id:id});
        res.status(200).json({message:data})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"some error occured"})
    }
}