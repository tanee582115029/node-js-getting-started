const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const helper = require('./helper/helper')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(process.env.PORT || 3000, function () { console.log('run on 3000') })

app.post('/webhook', function (req,res) {

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer {hYfoRe8zpVdWHXoXkYCpln3fplbY8uFWOc94nQEmfIvCKWsp7jNKzDKFQSbK2ImrnCtLEYyATbRlzJhWmXlrQgZc0ospynOPobSs4j8Aq7AE3rsTmTJn+0DuDe5dvsxWbrw9oFlSTZixccwZ/hXFVAdB04t89/1O/w1cDnyilFU=}`,
  }
  const replyToken = req.body.events[0].replyToken
  const userId = req.body.events[0].source.userId
  const messageType = req.body.events[0].message.type

  let msg = {}

  if (messageType === 'location') {
    msg = {
      type: 'text',
      text: 'Title: '+req.body.events[0].message.title + 'Address: '+req.body.events[0].message.address + 'Lat & Lng: '+req.body.events[0].message.latitude + ' , ' + req.body.events[0].message.longitude
    }
  }

  const body = JSON.stringify({
    replyToken: replyToken,
    messages: [ msg ],
  })
  fetch('https://api.line.me/v2/bot/message/reply', {
      method: 'POST',
      headers,
      body,
  })
  res.sendStatus(200)

})


app.get('/', function (req,res) {
  res.json(helper('hi'))
})


// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))