var React = require('react');
var {connect} = require('react-redux');

export var PokeView = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div>
        PokeView
      </div>
    );
  }
});

export default connect()(PokeView);
