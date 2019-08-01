const express=require('express');
const router=express.Router();
const controller=require('./05-controller');

router.get('/index',(req,res)=>{
    controller.getIndex(req,res);
})
router.get('/edit',(req,res)=>{
    controller.getEdit(req,res)
})
router.get('/getHeroById',(req,res)=>{
    controller.getHeroById(req,res)
})
router.post('/editHeroById',(req,res)=>{
    controller.editHeroById(req,res);
})
module.exports=router