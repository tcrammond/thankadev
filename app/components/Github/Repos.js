var React = require('react');

var Repos = React.createClass({

  render: function() {

    // TODO: Repo component and share component
    let repos = this.props.repos.map(function(repo, index) {
      return (
        <li className="list-item" key={index}>
          <div className="row">
            <div className="column column-75">
              {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
              {!repo.html_url && <h4>{repo.name}</h4>}
              {repo.description && <p>{repo.description}</p>}
            </div>
            <div className="column column-25 text-right">
              {repo.owner.email && <a className="button" href={"mailto:" + repo.owner.email}>Email</a>}
              {repo.owner.login && <a className="button button-twitter" href={"https://twitter.com/" + repo.owner.login}>Tweet</a>}
            </div>
          </div>
        </li>
      );
    });

    return (
      <div>
        <h3>Your Starred Repos</h3>
        <ul className="list list-repos">
          {repos}
        </ul>
      </div>
    );
  }
});

module.exports = Repos;