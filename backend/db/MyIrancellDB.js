const mysql=require('mysql')
const db=mysql.createConnection({
    port:'localhost',
    user:'root',
    password:'',
    database:'myirancell'
})

module.exports=db