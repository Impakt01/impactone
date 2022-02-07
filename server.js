const express = require('express')
const path = require('path')

const port = process.env.PORT || 5000
const app = express()


const publicDirectory = path.join(__dirname, './public')

app.use(express.static(publicDirectory))

app.listen(port, () => {
    console.log('server up')
})