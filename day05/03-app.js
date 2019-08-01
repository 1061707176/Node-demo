const express=require('express');
const router=require('./04-router');
const bodyParser=require('body-parser');
const app=express();
app.listen(8080, () => {
    console.log('http://127.0.0.1:8080');
});
app.use('/assets',express.static('assets'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(router)//这是一个中间件,设置在这里是可以让他去找router里面的条件