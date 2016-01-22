var React = require('react');

var TweetButton = React.createClass({
  intentUrl: 'https://twitter.com/intent/tweet',

  getTweetLink() {
    const components = [
      `${this.intentUrl}?text=`,
      encodeURIComponent(this.props.message)
    ];

    if (this.props.url) {
      components.push(`&url=${encodeURIComponent(this.props.url)}`);
    }

    return components.join('');
  },

  render: function() {
    return (
      <a {...this.props} href={this.getTweetLink()} target="_blank">Tweet</a>
    );
  }
});

module.exports = TweetButton;