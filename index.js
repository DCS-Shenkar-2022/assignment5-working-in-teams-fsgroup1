const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const { getGithubData, getGithubRepoName, getRepoContributors } = require('./axiosmodel')

// app.param('githubUserName', (req,res,next,value) => {
// 	if(/\d/.test(value) || /\s/.test(value)) {
// 		res.send("Invaild input");
// 	}
// 	else
// 		next();
// });

// app.param('repoName', (req,res,next,value) => {
// 	if(/\d/.test(value) || /\s/.test(value)) {
// 		res.send("Invaild input");
// 	}
// 	else
// 		next();
// });

app.get('/api/v1/githubUser/:githubUserName/avatar', async (req, res) => {
    let avatar = await getGithubData(req.params.githubUserName).then(e => e.avatar_url);
    console.log(avatar);
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <img src=${avatar} title='avatar' alt='avatar'>

    </body>
    </html>`)
});

app.get('/api/v1/githubUser/:githubUserName/repo/:repoName', async (req, res) => {
    let rep_Name = await getGithubRepoName(req.params.githubUserName,req.params.repoName).then(e => e.name);
    console.log(rep_Name);
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> repo name: ${rep_Name} </h1>
    </body>
    </html>`)
});

app.get('/api/v1/githubUser/:githubUserName/repo/:repoName/contributers', async (req, res) => {
    let rep_Contributers = await getRepoContributors(req.params.githubUserName,req.params.repoName).then(e => e.contributions);
    console.log(rep_Contributers);
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <p> number of contributions: ${rep_Contributers} </p>
    </body>
    </html>`)
});
app.all('*', (req, res) => res.send('Global handler for all routes'));

app.listen(port);
// getGithubData().then(e => console.log(e));
// getGithubRepoName().then(e => console.log(e));
// getRepoContributors().then(e => console.log(e));