const express = require("express");
const db = require("../db/MyIrancellDB.js");
const userRouter = express.Router();
const registerRouter = express.Router();
const getinfo = express.Router();
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
// getuser
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
        // console.log(response);
        res.send(JSON.stringify(response));
      }
    });
  }
});

// get one register user
getinfo.post("/getinfo", (req, res) => {
  let queryRegistered = `SELECT * FROM register WHERE username=? AND password=?`;
  if (req.path == "/getinfo") {
    db.query(queryRegistered,[req.body.username,req.body.password],(err,response)=>{
      if(err){
        console.log(err);
        res.status(400).json({message:'can not find user registered'})
      }else{
        res.send(JSON.stringify(response))
      }
    })
  }
});

// register
registerRouter.post("/register", (req, res) => {
  if (req.path == "/register") {
    let hasUserInDb = `SELECT * FROM register`;
    let queryInsert = `INSERT INTO register SET ?`;
    db.query(hasUserInDb, (errs, result) => {
        if (errs) {
            console.log("خطا در جستجوی کاربر");
            return res.status(500).json({ message: "خطا در اتصال" });
        }
        if (result.length > 0) {
            var isUser = result.find((elem) => {
                if (elem.username == req.body.username){
                    return elem;
                 } 
            });
            if (isUser == undefined || isUser == null ) {
          db.query(queryInsert, req.body, (error, respons) => {
            if (error) {
              console.log("error");
              res.send(JSON.stringify("ثبت نام موفقیت امیز نبود"));
            } else {
              console.log("user is successfuly add to database");
              // const token = jwt.sign(req.body, secretKey);
               res.send(JSON.stringify(req.body));
            }
          });
        } else {
          console.log("user has before registered");
          return res.status(401).json({ message: "user has before registered " });
        }
      }else{
        db.query(queryInsert, req.body, (error, respons) => {
            if (error) {
              console.log("error");
              res.send(JSON.stringify("ثبت نام موفقیت امیز نبود"));
            } else {
              console.log("user is successfuly add to database");
              res.send(JSON.stringify(req.body));
            }
          });
      }
    });
  }
});

module.exports = { userRouter, registerRouter ,getinfo };
 