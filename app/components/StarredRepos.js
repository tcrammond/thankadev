var React = require('react');
var ReactRouter = require('react-router');

var Repos = require('./Github/Repos');
var helpers = require('./../utils/helpers');

var Profile = React.createClass({

  /*
   Set the initial state of the component, i.e. any state this is going to handle is initialized here
   */
  getInitialState: function() {
    return {
      repos: []
    };
  },

  /*
   This lifecycle event will be called after the component mounts the view (duh)
   */
  componentDidMount: function() {
    helpers.github
      .getUserData(this.props.params.username)
      .then((repos) => {
        this.setState({
          repos: repos
        });
      });
  },

  render: function() {
    return (
        <Repos repos={this.state.repos}/>
    );
  }

});

module.exports = Profile;