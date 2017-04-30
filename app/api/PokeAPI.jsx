var axios = require('axios');
const REQUEST = 'http://pokeapi.co/api/v2/pokemon/';

var self = module.exports = {
  get: (id) => {
    // Get a complete info of a Pokemon by id
  },
  getAll: () => {
    var stringPokemons = localStorage.getItem('pokemons');
    var pokemons = [];

    try {
      pokemons = JSON.parse(stringPokemons);
    } catch (e) {
      console.error(e);
    }

    return $.isArray(pokemons) ? pokemons : [];
  },
  setAll: () => {
    if(!localStorage.getItem('pokemons')) {
      return axios.get(REQUEST + '?limit=811').then(function(res) {
        if($.isArray(res.data.results)) {
          localStorage.setItem('pokemons', JSON.stringify(res.data.results));

          return res.data.results;
        }
      }, function(err) {
        throw new Error('Enable to fetch Pokémon datas.');
      });
    }
  },
  suggest: (searchText) => {
    var filteredPkmns = self.getAll();

    // Filter by searchText
    filteredPkmns = filteredPkmns.filter(pkmn => {
      var pkmn = pkmn.name.toLowerCase();

      return pkmn.indexOf(searchText.toLowerCase()) >= 0;
    });

    return searchText.length > 0 ? filteredPkmns : [];
  }
}
