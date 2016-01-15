var React = require('react');

var Repos = React.createClass({

  render: function() {
    let repos = this.props.repos.map(function(repo, index) {
      return (
        <li className="list-group-item" key={index}>
          {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
          {repo.owner.email && <h6>{repo.owner.email}</h6>}
        </li>
      );
    });
    console.log(this.props.repos, repos);

    return (
      <div>
        <h3>Repos! </h3>
        <ul className="list-group">
          {repos}
        </ul>
      </div>
    );
  }
});

module.exports = Repos;