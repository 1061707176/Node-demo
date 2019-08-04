const fs = require('fs');
const mysql=require('mysql')
module.exports = {
    getAllHero, getHeroById,addNewHero,deleteHeroById,editHeroById
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
let sql=`SELECT * FROM diaomao WHERE id = ${id}`;
conn.query(sql,(err,result)=>{
    if(err)console.log(err);
    callback(result[0])
})
}
function editHeroById(id,data,callback){
    let sql=`UPDATE diaomao SET \`name\`='${data.name}',\`gender\`='${data.gender}',\`img\`='${data.img}' WHERE id = ${id}`
    conn.query(sql,(err,result)=>{
        if(err) console.log(err);
        callback(result)
    })
}
function deleteHeroById(id,callback){
    let sql=`UPDATE diaomao SET isdelete = 1 WHERE id = ${id}`
    conn.query(sql,(err,result)=>{
        if(err)console.log(err);
        callback(result)
    })
}