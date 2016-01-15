var React = require('react');

// Creates a React component
var Main = React.createClass({

  // Specifies what the UI looks like for this component
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <h1 className="text-center">Thank a developer</h1>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Main;