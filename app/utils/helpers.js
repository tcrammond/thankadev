var axios = require('axios');

function getStarredRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/starred`);
}

var helpers = {
  github: {

    //
    getUserData: function(username) {
      return getStarredRepos(username);
    }
  }
};

module.exports = helpers;