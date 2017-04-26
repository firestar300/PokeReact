var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var PokeAPI = require('PokeAPI');

export var PokeSearch = React.createClass({
  render: function() {
    var {dispatch, searchText} = this.props;

    return (
      <div>
        <input type="search" placeholder="Search a Pokémon" ref="searchText" onChange={() => {
            var searchText = this.refs.searchText.value.toLowerCase();
            dispatch(actions.setSearchText(searchText));
          }} />
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      searchText: state.searchText
    }
  }
)(PokeSearch);
