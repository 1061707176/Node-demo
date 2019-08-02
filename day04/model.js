const fs=requirerequire('fs');
let model={
    getAllHero:function(callback){
        fs.readFile('./data/heros.json','utf-8',(err,data)=>{
            if(err) console.log(err);
            let arr=JSON.parse(data);
            callback(arr)
        })
    },
    
}