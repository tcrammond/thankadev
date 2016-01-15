var React = require('react');

// Creates a React component
var Main = React.createClass({

  // Specifies what the UI looks like for this component
  render: function() {
    return (
      <div className="container">
        <div className="row hero">
          <div className="column text-center">
            <h1>Thank a developer</h1>
            <p>A 'thank you' goes a long way.</p>
            <p>Why not reach out and make someone's day?</p>
          </div>
        </div>
        <div className="row" style={{marginTop: '75px'}}>
          <div className="column column-50 column-offset-25">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Main;