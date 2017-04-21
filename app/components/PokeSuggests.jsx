var React = require('react');
var {connect} = require('react-redux');
import PokeSuggestsItem from 'PokeSuggestsItem';
var PokeAPI = require('PokeAPI');

export var PokeSuggests = React.createClass({
  render: function() {
    var {searchText} = this.props;

    var renderPokemons = () => {
      if(searchText !== '') {
        return PokeAPI.suggest(searchText).map((pokemon) => {
          var key = pokemon.url.replace('http://pokeapi.co/api/v2/pokemon/', '').replace('/', '');

          return (
            <PokeSuggestsItem key={key} {...pokemon} />
          );
        });
      }
    };

    return(
      <div className="pokemon-list">
        {renderPokemons()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(PokeSuggests);
