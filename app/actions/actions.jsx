export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var displayPokemon = (id) => {
  return {
    type: 'DISPLAY_POKEMON'
  }
};
