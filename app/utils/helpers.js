var axios = require('axios');

function getStarredRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/starred`);
}
function getUser(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

var helpers = {
  github: {
    getUserData: function(username) {
      var promises;
      var repos;

      return new Promise(function(resolve, reject) {
        getStarredRepos(username)
          .then(function(reposResponse) {
            repos = reposResponse.data;

            // Retrieve full owner details of each repo
            promises = repos.map(function(repo) {
              return getUser(repo.owner.login).then(function(userResponse) {
                repo.owner = userResponse.data;
              })
            });

            // Return list of repos after all users have been retrieved.
            Promise.all(promises).then(function() {
              resolve(repos);
            });
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};

module.exports = helpers;