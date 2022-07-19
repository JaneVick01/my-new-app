const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Howdy from app.js!')
})

app.listen(port, () => {
    console.log('Yes, we\'re there, listening on port ${port}.')
})