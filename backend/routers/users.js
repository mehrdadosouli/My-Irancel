const express=require('express')
const db=require('../db/MyIrancellDB.js')
const userRouter=express.Router()






userRouter.get('/',(req,res)=>{
    db.connect((err)=>{
        if(err){
            console.log(err,'could not connect');
        }else{
            console.log('db vasl shod');
        }
    })
    // let querys=`SELECT * FROM users`
    // db.query(querys,(err,response)=>{
    //     if(err){
    //         res.send(JSON.stringify(err))
    //     }else{
    //         res.send(JSON.stringify(response)) 
    //     }
    // })
})

module.exports = userRouter