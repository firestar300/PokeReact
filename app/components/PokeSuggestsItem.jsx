var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var PokeSuggestsItem = React.createClass({
  render: function() {
    var {name, url, dispatch} = this.props;
    console.log(this.props)

    return (
      <div onClick={() => {
        //console.log(url);

        if(url !== undefined) {
          dispatch(actions.displayPokemon(url))
        }
      }}>
        {name.toUpperCase()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    console.log(state);
    return {
      url: state.url
    }
  }
)(PokeSuggestsItem);
