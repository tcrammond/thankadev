var React = require('react');

var TweetButton = React.createClass({
  intentUrl: 'https://twitter.com',

  getProfileLink() {
    return `${this.intentUrl}/${this.props.username}`;
  },

  render: function() {
    return (
      <a {...this.props} href={this.getProfileLink()} target="_blank">P</a>
    );
  }
});

module.exports = TweetButton;