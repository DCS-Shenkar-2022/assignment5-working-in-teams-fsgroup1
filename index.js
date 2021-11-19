const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const { getGithubData, getGithubRepoName, getRepoContributors } = require('./axiosmodel')
// ~~~~~~CHECK INOUT IS NOT NUMBER OR CONTAIN SPACES~~~~~~~
app.param('githubUserName', (req,res,next,value) => {
	if(/\d/.test(value) || /\s/.test(value)) {
		res.send("Invaild input");
	}
	else
		next();
});
app.param('repoName', (req,res,next,value) => {
	if(/\d/.test(value) || /\s/.test(value)) {
		res.send("Invaild input");
	}
	else
		next();
});
// ~~~~~~~PRINT AVATAR
app.get('/api/v1/githubUser/:githubUserName/avatar', async (req, res) => {
    console.log(`got avatar request`);
    let avatar = await getGithubData(req.params.githubUserName).then(e => e.avatar_url);
    //console.log(avatar);
    res.send(`
    <!DOCTYPE html>
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
    </html>
    `)
});
// ~~~~~~~PRINT Name
app.get('/api/v1/githubUser/:githubUserName/repo/:repoName', async (req, res) => {
    console.log(`got name request`);
    let repo = await getGithubRepoName(req.params.githubUserName,req.params.repoName).then(e => e);
    res.setHeader("content-type","application/json");
    res.send(JSON.stringify(repo,null,4));
});
// ~~~~~~~PRINT CONTRIBUTORS IN JSON
app.get('/api/v1/githubUser/:githubUserName/repo/:repoName/contributers', async (req, res) => {
    console.log(`got contributers request`);
    let d =await getRepoContributors(req.params.githubUserName,req.params.repoName);
    res.setHeader("content-type","application/json");
    res.send(JSON.stringify(d,null,4));
});
// ~~~~~~~DEFAULT    
app.all('*', (req, res) => res.send('Global handler for all routes'));
console.log(`start listening port ${port}`);
app.listen(port);
// getGithubData().then(e => console.log(e));
// getGithubRepoName().then(e => console.log(e));
// getRepoContributors().then(e => console.log(e));



