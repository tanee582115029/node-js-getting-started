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
  const replyToken = req.body.events[0].replyToken
  const userId = req.body.events[0].source.userId
  const body = JSON.stringify({
    replyToken: replyToken,
    messages: [
      {
        type: 'text',
        text: 'สวัสดีคุณ '+ userId +' เรามาจากอนาคต'
      },
      {
        "type": "flex",
        "altText": "Awaiting Start",
        "contents": {
            "type": "bubble",
            "direction": "ltr",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "เทส flex ใน bot",
                        "size": "xl",
                        "align": "start",
                        "weight": "bold",
                        "color": "#000000",
                    },
                    {
                        "type": "text",
                        "margin": "md",
                        "text": "โย่วๆๆๆๆ",
                        "align": "start",
                        "color": "#595959",
                        "wrap": true,
                    },
                ],
            },
            "footer": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "button",
                        "action": {
                            "type": "message",
                            "label": "dflb",
                            "text": "กดดดดดดดด",
                        },
                        "color": "#0AC775",
                        "style": "primary",
                    },
                    {
                        "type": "spacer",
                    },
                ],
            },
        },
      }
    ],
  })
  fetch('https://api.line.me/v2/bot/message/reply', {
      method: 'POST',
      headers,
      body,
  })
  res.sendStatus(200)

})