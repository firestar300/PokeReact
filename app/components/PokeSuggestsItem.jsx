var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var PokeSuggestsItem = React.createClass({
  render: function() {
    var {name, key, dispatch} = this.props;

    return (
      <div onClick={() => {
        dispatch(actions.displayPokemon(key))
      }}>
        {name.toUpperCase()}
      </div>
    );
  }
});

export default connect()(PokeSuggestsItem);
