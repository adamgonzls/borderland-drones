const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('<h1>Borderland Drones</h1>')
})

app.get('/missions', (req, res) => {
  res.send('here are all the missions')
})

app.get('/missions/new', (req, res) => {
  res.send('You can add a new mission here')
})

app.get('/missions/:id', (req, res) => {
  const { id } = req.params
  res.send(`Here is mission id:${id}`)
})

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`)
})
