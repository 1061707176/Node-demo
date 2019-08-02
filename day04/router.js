const controller=require('controller')//引入controller;
const express=require('express');//引入express引擎;
const router=express.Router();
router.get('/index',(req,res)=>{//监听主页的请求,如果有人请求主页则将其返回
    controller.getIndex(req,res) 
});
router.get('/add',(req,res)=>{//监听添加请求,如果有人发送添加请求则返回请求页面
    controller.getAdd(req,res);
});
router.get('/deleteHeroById',(req,res)=>{//监听删除请求
    controller.deleteHeroById(req,res)
});
//监听新增数据请求;
router.post('/addNewHero',(req,res)=>{
    controller.addNewHero(req,res);
})
//将router对象暴露出去
module.exports=router

