const express = require('express')
const router=express.Router();
const {createTODO,getTODO,getOneTODO,updateTODO,deleteTODO}=require("../controllers/todo");

router.post('/todoCreate',createTODO);
router.get('/getTodo',getTODO);
router.get('/getOneTodo/:id',getOneTODO);
router.put('/updateTODO/:id',updateTODO);
router.delete('/deleteTODO/:id',deleteTODO);


module.exports = router;