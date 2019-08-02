const model=require('/model');
let controller={
    getIndex(req,res){
        model.getAllHero((arr)=>{//
            res.render('index',{arr});
        })
    },
    deleteHeroById(req,res){
        let id=req.query.id;
        model.getAllHero((arr)=>{
            let isExit= arr.findIndex(e=>{
                return e.id==id;
            })
            isExit!=-1? arr.splice(isExit,1):0;
            model.writeFile(arr);
            res.send({code:200,msg:'成功'})
        })
    },
    //返回一个新增的页面
    getAdd(req,res){
        res.render('add')
    },
    addNewHero(req,res){
        console.log(req.body);
        model.getAllHero((arr)=>{
            model.getMaxId((maxId)=>{
                req.body.id=maxId+1;
                arr.push(req.body);
                model.writeFile(arr);
                res.send({code:200,msg:'成功'})
            })
        })
    }

}
module.exports=controller