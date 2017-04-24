var React = require('react');

import PokeSearch from 'PokeSearch';
import PokeSuggests from 'PokeSuggests';
import PokeView from 'PokeView';

var PokeApp = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="column small-centered small-12 medium-6 large-4">
          <PokeSearch />
          <PokeSuggests />
          <PokeView />
        </div>
      </div>
    );
  }
});

module.exports = PokeApp;
