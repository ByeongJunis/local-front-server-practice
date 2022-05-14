const express = require('express')
const app = express()
const port = 8888

app.get('/',(req,res)=>{
    res.status(200).send('안녕하세용가리')
})

app.listen(port,()=>{
    console.log('서버 시작되었습니당')
})