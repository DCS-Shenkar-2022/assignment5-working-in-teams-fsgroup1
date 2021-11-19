const axios = require('axios');
// const url = axios.get(`https://api.github.com/users/${username}`);
// let username = 'BaderDak0';
// let username = 'idankario';
// let username = 'AmirAvidan';
// let username = 'noamroy';
// let username = 'Koral Tsaba';
// let username = 'Michalglozman';
const getPrimise=(promise)=> {
    // using .then, create a new promise which extracts the data
    const dataPromise =  promise.then((response) => response.data);
    // return it
    return dataPromise;
}
const getGithubData=(username)=> {
    // create a promise for the axios request
    return getPrimise(axios.get(`https://api.github.com/users/${username}`));
    // /api/v1/github User/BaderDak0/avatar
}
const getGithubRepoName=(username, repoName)=> {
    // create a promise for the axios request
    return getPrimise(axios.get(`https://api.github.com/repos/${username}/${repoName}`));
}
const getRepoContributors=(username,repoName)=> {
    // create a promise for the axios request
    return getPrimise(axios.get(`https://api.github.com/repos/${username}/${repoName}/contributors`));
}
module.exports = {
    getGithubData,  
    getGithubRepoName,
    getRepoContributors,
};
  