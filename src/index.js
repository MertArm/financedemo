const express = require('express')
const users = require('./users.json')
const app = express()
const port = 3000

app.get('/users', (req, res) => {
  res.json(users)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

