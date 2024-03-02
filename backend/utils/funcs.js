const db =require('../db/MyIrancellDB.js')
const getUserId=(tokenUser)=>{
    let querys=`SELECT id FROM users WHERE token=${tokenUser}`
    db.query(getUserId,(err,res)=>{
        if(err){
            console.log('not token user');
            return false
        }else{
            return res
        }
    })
}

module.exports=getUserId