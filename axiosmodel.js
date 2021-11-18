const axios = require('axios');

//const url = axios.get(`https://api.github.com/users/${username}`);
// let username = 'BaderDak0';
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
const getGithubRepoName=(username)=> {
    // create a promise for the axios request
    return getPrimise(axios.get(`https://api.github.com/repos/${username}/Distributed-Cloud-Services-Web`));
}
const getRepoContributors=(username)=> {
    // create a promise for the axios request
    return getPrimise(axios.get(`https://api.github.com/repos/${username2}/BookShoop-Cpp/contributors`))
}
// getGithubData('BaderDak0').then(e => console.log(e));
module.exports = {
    getGithubData,  
    getGithubRepoName,
    getRepoContributors,
    
  };
  