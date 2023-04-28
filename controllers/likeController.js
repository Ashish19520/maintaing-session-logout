const mongoose=require('mongoose');
const Like=require('../models/likeModel');
const Post=require('../models/postModel');

exports.likePost=async (req,res)=>{
    try{
    const {post,user}=req.body;
    const like=new Like({user,post});
    const savedLike=await like.save();
    const fetchPost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true});
    res.json({post:fetchPost,})
    }
    catch(err){
        console.log(err);
       
}}

exports.disLikePost=async(req,res)=>{
    try {
        const {post,like}=req.body;
        const deletedLike=await Like.findOneAndDelete({post:post,_id:like});
        const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true})
        res.json({post:updatedPost});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:err.message});
    }
}
   
