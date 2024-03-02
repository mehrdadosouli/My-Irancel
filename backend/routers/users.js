const express=require('express')
const db=require('../db/MyIrancellDB.js')
const userRouter=express.Router()
const getUserId=require('../utils/funcs.js')
// const jwt = require('jsonwebtoken');



// // کلید اختصاصی برای امضای توکن
// const secretKey = process.env.JWT_SECRET;

// // اگر کلید JWT_SECRET در متغیرهای محیطی تعریف شده باشد، توکن ایجاد شده معتبر است
// if (!secretKey) {
//     console.error('JWT_SECRET is not defined in environment variables');
//     process.exit(1);
// }

// // ایجاد توکن JWT با استفاده از payload و کلید اختصاصی
// const token = jwt.sign(user, secretKey);

// console.log(token);


db.connect((err)=>{
    if(err){
        console.log(err,'could not connect');
    }else{
        console.log('db vasl shod');
    }
})

userRouter.get('/users',(req,res)=>{
    if(req.path=='users'){
        let querys=`SELECT * FROM users WHERE firsname=${req.body.firsname} AND phone=${req.body.phone}`
        db.query(querys,(err,response)=>{
            if(err){
                console.log(err);
                res.send(JSON.stringify('not user',err))
            }else{
                console.log(response);
                res.send(JSON.stringify(response)) 
            }
        })
    }
})

module.exports = userRouter