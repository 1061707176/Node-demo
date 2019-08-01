/**
 * 一定要下载所需的所有第三方模块
 * express命令   npm i -s ejs
 * ejs命令   npm i -s ejs 
 * 
 *  */
//搭建服务器
const express=require('express')
const fs=require('fs');
const app= express();
app.listen(8080,()=>{
    console.log('服务器已开启，通过 http://127.0.0.1:8080 访问')
})
app.use('/assets',express.static('assets'));
app.set('view engine','ejs');
app.get('/index',(req,res)=>{
    fs.readFile('./data/heros.json','utf-8',(err,data)=>{
        if(err) console.log(err);
        let arr=JSON.parse(data);
        res.render('index',{arr})
    })
})