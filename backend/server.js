const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const app=express()
app.use(cors())
app.use(bodyparser.json({extended:false}))
const {userRouter}=require('./routers/users.js')
const {registerRouter}=require('./routers/users.js')

app.use('/',userRouter)
app.use('/',registerRouter)

app.listen(5000) 