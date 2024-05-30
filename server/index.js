const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/',()=>{
    res.send("Hello World")
})

app.listen(8080,(req,res)=>{
    console.log("Server is running")
})