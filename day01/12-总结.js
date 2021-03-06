/**
 * nodejs
 *  是什么
 *    运行在服务器上的js
 *  能干嘛
 *    做服务器
 *    写前端工具
 *    帮助就业
 *    
 *    - 我们学node的目标，不是做后台，而是学习后台的思想，能够和后台开发人员，流畅的沟通
 *  怎么用
 *    准备工作
 *      安装node环境
 *        - 百度nodejs , 到官网下载， 无脑下一步
 *        - 验证是否安装成功 命令窗口里面  node -v
 *  
 *    nodejs的一个代码
 *      写在js文件里面的代码如何执行
 *        在当前目录，打开 cmd 或者powershell 通过node命令执行
 *          node 要执行的js文件
 *            可以配合tab键快速找到对应的文件执行
 * 
 *          cls - 情况控制台
 *    怎么搭建服务器
 *      引入模块
 *      创建服务器对象
 *      绑定ip和端口
 *      注册请求事件
 *        设置响应头 res.setHeader()
 *        返回数据   res.end(string|buffer)
 * 
 * 
 *      学会nodejs服务器里面如何处理静态文件
 *        fs模块读取
 *          fs.readFile(路径,编码,回调函数);
 *        http模块返回
 *          res.end()
 * 
 *    回调函数是nodejs里面的一大精华
 * 
 *      如果处理静态资源
 *        把静态资源放在几个固定的文件夹里面
 *        看请求的url，是否是以这些文件夹开的头，如果是，就读取返回
 */