const db =require('../db/MyIrancellDB.js')
const getUserId=(username,password)=>{
    let querys=`SELECT id FROM register WHERE username=${username} AND password=${password}`
    db.query(querys,(err,res)=>{
        if(err){
            console.log('not token user');
            return false
        }else{
            return res
        }
    })
}

module.exports=getUserId