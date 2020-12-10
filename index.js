const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(process.env.PORT || 3000, function () { console.log('run on 3000') })

app.post('/webhook', function (req,res) {

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer {hYfoRe8zpVdWHXoXkYCpln3fplbY8uFWOc94nQEmfIvCKWsp7jNKzDKFQSbK2ImrnCtLEYyATbRlzJhWmXlrQgZc0ospynOPobSs4j8Aq7AE3rsTmTJn+0DuDe5dvsxWbrw9oFlSTZixccwZ/hXFVAdB04t89/1O/w1cDnyilFU=}`,
  }


  res.json('hi',200)
})