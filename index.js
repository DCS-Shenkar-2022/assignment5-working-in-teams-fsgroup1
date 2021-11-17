const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const {getGithubData,getGithubRepoName,getRepoContributors} =require('./axiosmodel')
app.get('/api/v1/githubUser/:githubUserName/avatar',(req,res) => {});
app.get('/api/v1/githubUser/:githubUserName/repo/:repoName',(req,res) => {});
app.get('/api/v1/githubUser/:githubUserName/repo/:repoName/contributers',(req,res) => {});
app.all('*',(req,res) => res.send('Global handler for all routes'));
getGithubData().then(e=>console.log(e));
getGithubRepoName().then(e=>console.log(e));
getRepoContributors().then(e=>console.log(e));





