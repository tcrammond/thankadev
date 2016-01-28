var React = require('react');

var TwitterProfileButton = require('../Twitter/ProfileButton');
var TweetButton = require('../Twitter/TweetButton');

var Repos = React.createClass({

  siteUrl: 'http://thankadev.github.io',
  intentUrl: 'https://twitter.com/intent/tweet',

  propTypes: {
    repos: React.PropTypes.array.isRequired
  },

  getMailTo(repo) {
    return `mailto:${repo.owner.email}?subject=${this.getMessageSubject(repo)}&body=${this.getMessageBody(repo)}%0D%0A%0D%0A${this.siteUrl}`;
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
            <div className="column">
              {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
              {!repo.html_url && <h4>{repo.name}</h4>}
              {repo.description && <p>{repo.description}</p>}
            </div>
          </div>
          <div className="row">
            <div className="column">
              {repo.owner.email && <a className="button" href={this.getMailTo(repo)}>Email</a>}
              <TwitterProfileButton className="button button-twitter" username={repo.owner.login} />
              <TweetButton className="button button-twitter" message={`${this.getMessageBody(repo)} ${this.siteUrl}`} url={encodeURIComponent(repo.html_url)} />
            </div>
          </div>
        </li>
      );
    });

    return (
      <div>
        {!this.props.repos.length &&
          <div><i className="fa fa-spinner fa-spin" style={{fontSize: '24px'}}></i><span style={{marginLeft: '20px'}}>Just a second...</span></div>
        }
        {!!this.props.repos.length &&
          <div>
            <p>Here are your <i className="fa fa-star"></i> <strong>starred repositories</strong> with easy ways to
              contact the owner. You can email them if there's a public email address available or tweet them.</p>
            <p><em>We're assuming that the owner's Twitter username is identical to the GitHub username. Please check before tweeting!</em></p>
          </div>
        }
        <ul className="list list-repos">
          {repos}
        </ul>
      </div>
    );
  }
});

module.exports = Repos;