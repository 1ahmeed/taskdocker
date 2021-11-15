const express = require("express")
const app = express()
const PORT = 5000

app.get('/', (req, res) =>{
    res.send('hello')
})

app.listen(PORT, ()=>{
    console.log('Example app listening at http://localhost:5000')
})
