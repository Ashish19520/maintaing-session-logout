const Post=require("../models/postModel");

exports.createPost=async(req,res)=>{
    try {
        const {title,body}=req.body;
        const post=new Post({title,body});
        const savedPost=await post.save();
        res.json({post:savedPost})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
    }
}

exports.getAllPost=async(req,res)=>{
    try {
        const savedPost=await Post.find().populate("comments").exec();
        res.json({post:savedPost})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
    }
}