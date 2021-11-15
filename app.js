const express = require("express")
const app = express()
const PORT = 5000

app.get('/', (req, res) =>{
    res.send('Ahmed tarek elhefnawy , Sec: 1')
})

app.listen(PORT, ()=>{
    console.log('Example app listening at http://localhost:5000')
})
