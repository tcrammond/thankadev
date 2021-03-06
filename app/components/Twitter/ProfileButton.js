var React = require('react');

var TweetButton = React.createClass({
  intentUrl: 'https://twitter.com',

  propTypes: {
    username: React.PropTypes.string.isRequired
  },

  getProfileLink() {
    return `${this.intentUrl}/${this.props.username}`;
  },

  render: function() {
    return (
      <a {...this.props} href={this.getProfileLink()} target="_blank">View profile</a>
    );
  }
});

module.exports = TweetButton;