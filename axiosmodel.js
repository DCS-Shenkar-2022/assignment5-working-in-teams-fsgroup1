const axios = require('axios');

//const url = axios.get(`https://api.github.com/users/${username}`);
//let username = 'BaderDak0';
// let username2= 'idankario'
const getPrimise=(promise)=> {
    
    // using .then, create a new promise which extracts the data
    const dataPromise =  promise.then((response) => response.data)
    // return it
    return dataPromise
}
const getGithubData=(username)=> {
    // create a promise for the axios request
    return getPrimise(axios.get(`https://api.github.com/users/${username}`))
    // /api/v1/github User/BaderDak0/avatar
}
const getGithubRepoName=(username,repo)=> {
    // create a promise for the axios request
    return getPrimise(axios.get(`https://api.github.com/repos/${username}/${repo}`));
}
const getRepoContributors=(username,repo)=> {
    // create a promise for the axios request
    return getPrimise(axios.get(`https://api.github.com/repos/${username}/${repo}/contributors`))
}
//getGithubData('BaderDak0').then(e => console.log(e));
//getGithubRepoName('BaderDak0').then(e => console.log(e));
//getRepoContributors('BaderDak0').then(e => console.log(e));
module.exports = {
    getGithubData,  
    getGithubRepoName,
    getRepoContributors,
  };
  

//http://localhost:8080/api/v1/githubUser/BaderDak0/repo/Distributed-Cloud-Services-Web/