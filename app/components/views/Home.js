var React = require('react');
var Router = require('react-router');

var Home = React.createClass({
  mixins: [Router.History],
  getInitialState: function() {
    return {
      username: ''
    };
  },
  onUsernameChange: function(event) {
    this.setState({
      username: event.target.value || ''
    });
  },
  search: function(e) {
    e.preventDefault();

    if (this.state.username) {
      this.history.pushState(null, `/stars/${this.state.username}`);
    }
  },
  render: function() {
    return (
      <div>
        <h2 className="text-center">
          Enter your GitHub username
        </h2>
        <form onSubmit={this.search}>
          <input type="text" className="text-center" value={this.state.username} onChange={this.onUsernameChange}/>
          <button className="button button-block" onClick={this.search}>Go</button>
        </form>
      </div>
    );
  }
});

module.exports = Home;