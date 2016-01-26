var React = require('react');

var TweetButton = React.createClass({
  intentUrl: 'https://twitter.com/intent/tweet',

  getTweetLink() {
    let uri = `${this.intentUrl}?text=${encodeURIComponent(this.props.message)}`;

    if (this.props.url) {
      uri += `&url=${encodeURIComponent(this.props.url)}`;
    }

    return uri;
  },

  render: function() {
    return (
      <a {...this.props} href={this.getTweetLink()} target="_blank">Tweet</a>
    );
  }
});

module.exports = TweetButton;