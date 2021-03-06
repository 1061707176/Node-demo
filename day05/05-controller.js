const model=require('./06-model');
function getIndex(req,res){
    model.getAllHero((arr)=>{
        res.render('index',{arr});
    })
}
function getEdit(req,res){
    res.render('edit');
}
function getAdd(req,res){
    res.render('add');
}
//使用模板引擎动态渲染的修改的页面
function getEdit2(req,res){
    let id=req.query.id;
    model.getHeroById(id,target=>{
        res.render('edit2',target)
    })
}
function getHeroById(req,res){
    let id=req.query.id;
    model.getHeroById(id,target=>{
        let response={}
        if(target){
            response.code=200;
            response.msg='获取成功'
            response.data=target
        }else{
            response.code=503;
            response.msg='没有找到对应的数据'
        }
        res.send(response);
    })
}
function addNewHero(req,res){
    model.addNewHero(req.body,result=>{
        console.log(1)
        let response={
            code:501,
            msg:'失败'
        }
        if(result.affectedRows===1){
            response.code=200;
            response.msg='成功'
        }
        res.send(response)
    })

}


function editHeroById(req,res){
    let data=req.body;
    model.editHeroById(data.id,data,result=>{
        let response={
            code:501,
            msg:'失败'
        };
        if(result.affectedRows===1){
            response.code=200;
            response.msg='成功'
        }
        res.send(response)
    })

 
}
function deleteHeroById(req,res){
    let id=req.query.id;
    model.deleteHeroById(id,result=>{
        let response={
            code:501,
            msg:'失败'
        };
        if(result.affectedRows===1){
            response.code=200;
            response.msg='成功'
        }
        res.send(response)
    })
}
const controller={
    getIndex,getEdit,getHeroById,editHeroById,getAdd,addNewHero,getEdit2,deleteHeroById
}
module.exports=controller



