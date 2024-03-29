const express = require("express");
const db = require("../db/MyIrancellDB.js");
const userRouter = express.Router();
const registerRouter = express.Router();
const getinfo = express.Router();
const mypanel=express.Router()
const changeinfo=express.Router()
const login=express.Router()
const getUserId = require("../utils/funcs.js");

// const jwt = require("jsonwebtoken");
// کلید اختصاصی برای امضای توکن
// let secretKey = process.env.JWT_SECRET;

db.connect((err) => {
  if (err) {
    console.log(err, "could not connect");
  } else {
    console.log("db vasl shod");
  }
});
/////////////////////////////////////////////////////////// getuser
// userRouter.get("/users", (req, res) => {
//   if (req.path == "/users") {
//     let querys = `SELECT * FROM users WHERE firsname=${req.body.firsname} AND phone=${req.body.phone}`;
//     db.query(querys, (err, response) => {
//       if (err) {
//         console.log(err);
//         res.send(JSON.stringify("not user", err));
//       } else {
//         console.log(response);
//         res.send(JSON.stringify(response));
//       }
//     });
//   }
// });

// get Allregister user
userRouter.get("/register", (req, res) => {
  if (req.path == "/register") {
    let queryRegistered = `SELECT * FROM register`;
    db.query(queryRegistered, (err, response) => {
      if (err) {
        console.log(err);
        res.send(JSON.stringify("not user"));
      } else {
        res.send(JSON.stringify(response));
      }
    });
  }
});
///////////////////////////////////////////////////////// change user info mypanel  
changeinfo.put("/mypanel/edite", (req, res) => {
  let id=req.headers.authorization.split(',')[3]
  let updateInfoUser = `UPDATE register SET username=? ,password=?, profile=? WHERE id=${id}`;
  if (req.path == "/mypanel/edite") {
    db.query(updateInfoUser,[req.headers.authorization.split(',')[0],req.headers.authorization.split(',')[1],req.headers.authorization.split(',')[2]],(err,response)=>{

      if(err){
        res.status(400).json({message:'can not connect database'})
      }else{
        res.send(JSON.stringify('با موفقیت بروز شد'))
      }
    })
  }
});
///////////////////////////////////////////////////////// get user id mypanel
mypanel.post("/mypanel", (req, res) => {
  let queryRegistered = `SELECT id FROM register WHERE username=? AND password=?`;
  if (req.path == "/mypanel") {
    db.query(queryRegistered,[req.headers.authorization.split(',')[0],req.headers.authorization.split(',')[1]],(err,response)=>{
      if(err){
        console.log(err);
        res.status(400).json({message:'can not find user registered'})
      }else{
        res.send(JSON.stringify(response))
      }
    })
  }
});
// get data one register user
getinfo.post("/getinfo", (req, res) => {
  let queryRegistered = `SELECT * FROM register WHERE username=? AND password=?`;
  if (req.path == "/getinfo") {
    console.log(req.body);
    db.query(queryRegistered,[req.body.username,req.body.password],(err,response)=>{
      if(err){
        console.log(err);
        res.status(400).json({message:'can not find user registered'})
      }else{
      if(response.length){
        res.send(JSON.stringify(response))
      }else{
        console.log('error');
      }
    }
    })
  }
});
///////////////////////////////////////////////////////// login user  
login.post("/login", (req, res) => {
  let updateInfoUser = `SELECT * FROM register WHERE username=? AND password=?`;
  if (req.path == "/login") {
    db.query(updateInfoUser,[req.body.username , req.body.password],(err,response)=>{
      if(err){
        console.log('cant connect database');
        res.status(400).json({message:'can not connect database '})
      }else{
        if(response.length>0){
          res.send(JSON.stringify(response))
        }else{
          res.status(400).json({message:'can not find user'})
        }
      }
    })
  }
});
//////////////////////////////////////////////////////// register
registerRouter.post("/register", (req, res) => {
  if (req.path == "/register") {
    let hasUserInDb = `SELECT * FROM register WHERE username=? AND password=?`;
    let queryInsert = `INSERT INTO register SET ?`;
    db.query(hasUserInDb,[req.body.username,req.body.password], (errs, result) => {
        if (errs) {
            console.log("خطا در  اتصال");
            return res.status(500).json({ message: "خطا در اتصال" });
        }else {
            if(result.length){
              res.status(402).json({message:'همچین یوزری قبلا ثبت نام کرده است'})
            }else{
              db.query(queryInsert, req.body, (error, respons) => {
                if (error) {
                  console.log("error");
                  res.status(402).json({message:'خطا در ثبت نام دوباره سعی کنید'})
                } else {
                  console.log("user is successfuly add to database");
                   res.send(JSON.stringify(req.body));
                }
              });
            }
          }
    })

  }
});

module.exports = { userRouter, registerRouter ,getinfo ,mypanel,changeinfo ,login };
 