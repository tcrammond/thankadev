var React = require('react');

var Repos = React.createClass({

  siteUrl: 'http://thankadev.io',
  intentUrl: 'https://twitter.com/intent/tweet',

  // This is horrible.
  getTweet(repo) {
    return [
      `${this.intentUrl}?text=`,
      encodeURIComponent(`${this.getMessageBody(repo)} ${this.siteUrl}`),
      `&url=${encodeURIComponent(repo.html_url)}`
    ].join('');
  },

  getMailTo(repo) {
    return [
      `mailto:${repo.owner.email}`,
      `?subject=${this.getMessageSubject(repo)}`,
      `&body=${this.getMessageBody(repo)}%0D%0A%0D%0A${this.siteUrl}`
    ].join('');
  },

  getMessageSubject(repo) {
    return `A quick thanks for ${repo.name}`;
  },

  getMessageBody(repo) {
    return `Hey @${repo.owner.login}, thanks for making ${repo.name} :)`;
  },

  render() {

    // TODO: Repo component and share component
    let repos = this.props.repos.map((repo, index) => {
      return (
        <li className="list-item" key={index}>
          <div className="row">
            <div className="column column-75">
              {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
              {!repo.html_url && <h4>{repo.name}</h4>}
              {repo.description && <p>{repo.description}</p>}
            </div>
            <div className="column column-25 text-right">
              {repo.owner.email && <a className="button" href={this.getMailTo(repo)}>Email</a>}
              {repo.owner.login && <a className="button button-twitter" href={this.getTweet(repo)} target="_blank">Tweet</a>}
            </div>
          </div>
        </li>
      );
    });

    return (
      <div>
        <h3>Your Starred Repos</h3>
        {!this.props.repos.length &&
          <div><i className="fa fa-spinner fa-spin" style={{fontSize: '24px'}}></i><span style={{marginLeft: '20px'}}>Just a second...</span></div>
        }
        {!!this.props.repos.length && <p><em>Note: this assumes that GitHub/Twitter usernames are identical. Please check before tweeting!</em></p>}
        <ul className="list list-repos">
          {repos}
        </ul>
      </div>
    );
  }
});

module.exports = Repos;