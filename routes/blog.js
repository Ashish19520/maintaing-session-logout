const express = require('express')
const router=express.Router();
const {createComment}=require("../controllers/commentController");
const {createPost,getAllPost}=require("../controllers/postController");
const {likePost,disLikePost}=require("../controllers/likeController");

router.post('/createComment',createComment);
router.post('/createPost',createPost);
router.get('/getAllPost',getAllPost);
router.post('/likePost',likePost);
router.post('/disLikePost',disLikePost);



module.exports = router;