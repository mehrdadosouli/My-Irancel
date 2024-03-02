const mysql=require('mysql')
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'myirancell'
})

module.exports=db