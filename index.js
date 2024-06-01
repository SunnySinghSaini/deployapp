const express = require('express')
require('dotenv').config()
const app = express()
const port = 5000
const getGithubData = "https://api.github.com/users/SunnySinghSaini"

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req,res) => {
    res.send("Welcome and login here")
})
app.get('/youtube', (req,res) => {
    res.send("Here is your Youtube")
})
app.get('/github', (req,res) => {
    res.send(getGithubData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})