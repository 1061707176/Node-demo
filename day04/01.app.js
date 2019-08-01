//引入模块
const express=require('express');
//创建服务器
const app=express();
app.listen(8080,()=>{
    console.log('服务器已经开启,可以通过 http://127.0.0.1:8080 访问');
})
//处理静态资源
app.use('/views',express.static('views'));
app.use('/assets',express.static('assets'))
app.set('view engine','ejs');
//先准备一个模板文件,也就是要求在views文件夹里面的,后缀名是ejs
//导入数据
app.get('/ejs',(req,res)=>{
    res.render('ejs-template',{name:'狗蛋',age:12,gender:'男',id:10086})
})
app.get('/',(req,res)=>{
    res.send('沙雕儿')
})