var React = require('react');
var Router = require('react-router');

var Repos = require('./../Github/RepoList');
var helpers = require('./../../utils/helpers');

var Profile = React.createClass({
  mixins: [Router.History],

  /*
   Set the initial state of the component, i.e. any state this component will handle can be initialized here
   */
  getInitialState: function() {
    return {
      repos: []
    };
  },

  /*
   This lifecycle event will be called after the component mounts (is rendered in to) the view (duh)
   */
  componentDidMount: function() {

    // Retrieve the specified user's starred repositories and the owner of each repository
    helpers.github
      .getUserData(this.props.params.username)
      .then(repos => {
        this.setState({
          repos: repos
        });
      })
      .catch(error => {
        console.error('uh oh');
        this.history.pushState(null, `/`, {message: `Woops! Couldn\'t find that username or something else went wrong.`});
      });
  },

  render: function() {
    return (
        <Repos repos={this.state.repos}/>
    );
  }

});

module.exports = Profile;