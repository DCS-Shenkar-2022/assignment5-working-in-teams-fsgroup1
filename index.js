const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


app.get('/api/v1/githubUser/:githubUserName/avatar',(req,res) => {});
app.get('/api/v1/githubUser/:githubUserName/repo/:repoName',(req,res) => {});
app.get('/api/v1/githubUser/:githubUserName/repo/:repoName/contributers',(req,res) => {});
app.all('*',(req,res) => res.send('Global handler for all routes'));
 


app.listen(port);

