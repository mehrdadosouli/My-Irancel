const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const app=express()
app.use(cors())
app.use(bodyparser.json({extended:false}))
const getalluser=require('./routers/users.js')

app.use('/',getalluser)

app.listen(5000) 