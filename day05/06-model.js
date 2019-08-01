const fs=require('fs');
module.exports={
    getAllHero,getHeroById,writeFile
};
function getAllHero(callback){
    fs.readFile('./data/heros.json','utf-8',(err,data)=>{
        
    })
}