const express= require('express');//搭建服务器
const router=require('./router');//需要引入路由层
const bodyParser=require('body-parser')//引入body中间件
const app = express()//引入express引擎;
app.listen(8080, () => {//开启服务器端口
    console.log('服务器已开启，通过 http://127.0.0.1:8080 访问');
});
app.use('/assets', express.static('assets'));//处理静态资源
app.set('view engine','ejs');//设置默认的引擎
app.use(bodyParser.urlencoded({extended:false}));//注册body中间件,这个中间件的作用就是解析post的请求的数据,他会在req里面添加一个body-parser
app.use(router);

