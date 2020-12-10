const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, function () { console.log('run on 3000') })

app.post('/webhook', function (req,res) {
  res.json('hi',200)
})