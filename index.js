const express = require('express')
require('dotenv').config()
import app from './app'
const app = express()
const port = 5000
const getGithubData = {
    "login": "SunnySinghSaini",
    "id": 31573844,
    "node_id": "MDQ6VXNlcjMxNTczODQ0",
    "avatar_url": "https://avatars.githubusercontent.com/u/31573844?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SunnySinghSaini",
    "html_url": "https://github.com/SunnySinghSaini",
    "followers_url": "https://api.github.com/users/SunnySinghSaini/followers",
    "following_url": "https://api.github.com/users/SunnySinghSaini/following{/other_user}",
    "gists_url": "https://api.github.com/users/SunnySinghSaini/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SunnySinghSaini/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SunnySinghSaini/subscriptions",
    "organizations_url": "https://api.github.com/users/SunnySinghSaini/orgs",
    "repos_url": "https://api.github.com/users/SunnySinghSaini/repos",
    "events_url": "https://api.github.com/users/SunnySinghSaini/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SunnySinghSaini/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sunny",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2017-09-02T18:44:59Z",
    "updated_at": "2024-06-01T09:14:01Z"
    }

app.get('/', (req, res) => {
  res.send(app)
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