const express = require('express')
const art = require('ascii-art')
const app = express()
const port = 3000
var rendered = 'not filled yet';



art.font('brandweer', 'Doom')
       .then((rendered)=>{
           //rendered is the ascii
           app.get('/', (req, res) => {
            res.send(rendered)
        })
       }).catch((err)=>{
           //err is an error
       });



app.listen(port, () => {
    console.log('fhj3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.')
})