var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div className="row" style={{marginTop: '75px'}}>
        <div className="column"></div>
        <div className="column">
          <h2 className="text-center">
            Enter your GitHub username
          </h2>
          <input type="text" className="text-center"/>
          <button className="button" onClick={this.search}>Go</button>
        </div>
        <div className="column"></div>
      </div>


    );
  }
});

module.exports = Home;