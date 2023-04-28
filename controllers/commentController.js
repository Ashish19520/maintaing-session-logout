const mongoose=require("mongoose");
const Comment=require("../models/CommentModel");
const Post=require("../models/postModel");

exports.createComment=async(req,res)=>{
  try {
    const {post,user,body}=req.body;
    const comment=new Comment({post,user,body});
    const savedComment=await comment.save();
    const updatedPost=await Post.findByIdAndUpdate(post,{$push:{ comments:savedComment._id }},{new:true}).populate("comments").exec();
    res.json({post:updatedPost});
  } catch (error) {
    res.status(500).json({message:"internal server error"});  
    console.log(error )
  }
}