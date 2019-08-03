const fs = require('fs');
const mysql=require('mysql')
module.exports = {
    getAllHero, getHeroById, writeFile,addNewHero,deleteHeroById
};
let conn=mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'root', 
    database:'wangdefa'
})
function getAllHero(callback) {
  let sql=`SELECT * FROM diaomao WHERE isdelete=0`;
  conn.query(sql,(err,result)=>{
      if(err) console.log(err);
      callback(result);
  })
}
function addNewHero(data,callback){
    let sql=`INSERT INTO diaomao SET \`img\`='${data.img}',\`name\`='${data.name}',\`gender\`='${data.gender}',\`isdelete\`=0`//上传用户触发的添加语句
    conn.query(sql,(err,result)=>{
        if(err) console.log(err);
        callback(result)
    })
}
function getHeroById(id, callback) {
    this.getAllHero((arr) => {
        let target = arr.find(e => {
            return e.id == id;
        })
        callback(target);

    })
}
function writeFile(arr) {
    let content = JSON.stringify(arr)
    fs.writeFile('./data/heros.json', content, 'utf-8', err => {
        if (err) {
            console.log(err)
        }
    })
}
function deleteHeroById(id,callback){
    let sql=`UPDATE heros SET isDelete = 1 WHERE id = ${id}`
    conn.query(sql,(err,result)=>{
        if(err)console.log(err);
        callback(result)
    })
}